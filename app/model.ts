import { ConnectionDB } from "../connection";
import type sqlite from "sqlite3";

export abstract class Model<T> {
  // protected abstract columns: string[];
  protected static table: string;

  protected static lineWhere: string = "";
  protected static lineJoin: string = "";
  protected static lineSelect: string = "";

  private static connection: sqlite.Database = ConnectionDB.open();

  //   public static create(model: any) {
  //     const columns = Object.keys(this.getAttrs());
  //     console.log({ columns });
  //     // const values = Object.values();
  //     // const sql = `INSERT INTO ${this.getTableName()} (${columns}) VALUES (${values})`;
  //     // console.log(sql);
  //     // return new Promise((resolve, reject) => {
  //     //   this.connection.run(sql, (err: any) => {
  //     //     if (err) {
  //     //       console.log(err);
  //     //       reject(err);
  //     //     } else {
  //     //       console.log("Inserted");
  //   }

  private static getTableName(): string {
    return this.table || this.constructor.name;
  }

  static async get(): Promise<any> {
    // const table = this.arguments
    const sql = `SELECT ${Model.lineSelect || "*"} FROM ${this.getTableName()} a ${this.lineWhere}
        ${this.lineJoin}
    `;
    console.log(sql);
    return new Promise((resolve, reject) => {
      this.connection.all(sql, (err: any, rows: any) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(rows);
          this.connection.close();
          resolve(rows);
          //   return rows;
        }
      });
      this.lineWhere = "";
      this.lineJoin = "";
    });
  }

  //   where(column: string, key: ">" | "<" | "=" | "LIKE", value: any) {
  //     if (Model.lineWhere === "") {
  //       Model.lineWhere = `WHERE ${column} ${key} ${value}`;
  //     } else {
  //       Model.lineWhere = `${Model.lineWhere} AND ${column} ${key} ${value}`;
  //     }

  //     return this;
  //   }

  //   orWhere(column: string, key: ">" | "<" | "=" | "LIKE", value: any) {
  //     if (Model.lineWhere === "") {
  //       Model.lineWhere = `WHERE ${column} ${key} ${value}`;
  //     } else {
  //       Model.lineWhere = `${Model.lineWhere} OR ${column} ${key} ${value}`;
  //     }
  //     return this;
  //   }
  static select(sql: string) {
    Model.lineSelect = sql;
    return this;
  }

  static joins(sql: string) {
    if (Model.lineJoin === "") {
      //   Model.lineJoin = `${joint} JOIN ${table} ON ${inverseTable || this.getTableName()}.${inverseColumn} = ${table}.${column} `;
      Model.lineJoin = sql;
    } else {
      Model.lineJoin = ` ${Model.lineJoin} ${sql} `;
    //   Model.lineJoin = `${Model.lineJoin} ${joint} JOIN ${table} ON ${
    //     inverseTable || this.getTableName()
    //   }.${inverseColumn} = ${table}.${column} `;
    }
    return this;
  }
}
