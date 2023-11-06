import { Model } from "../app/model";

export class Store extends Model<Store> {
  protected static table: string = "stores";

  public id!: number;
  public name!: string;
  public address!: string;
  public latitude!: string;
  public longitude!: string;
  public email!: string;
  public company!: string;
  public created_at!: Date;

  protected static getAttrs() {
    return Object.keys(this);
  }

  public static create(model: any) {
    const columns = Object.getOwnPropertyNames(new Store());
    console.log({ columns });
    // const values = Object.values();
    // const sql = `INSERT INTO ${this.getTableName()} (${columns}) VALUES (${values})`;
    // console.log(sql);
    // return new Promise((resolve, reject) => {
    //   this.connection.run(sql, (err: any) => {
    //     if (err) {
    //       console.log(err);
    //       reject(err);
    //     } else {
    //       console.log("Inserted");
  }
}

