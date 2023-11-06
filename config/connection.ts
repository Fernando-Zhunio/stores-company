// import sqlite from 'sqlite3';
// import { createTable } from '../migrations/migrations';

// export class ConnectionDB {
//      private static db: sqlite.Database;
//      private static databaseName = 'stores.db';
//      private static managerDb = sqlite.verbose();

//     static open() {
//         if (!ConnectionDB.db) {
//             this.connectDatabase();
//             createTable(ConnectionDB.db);
//         }
//         return ConnectionDB.db;
//     }

//     truncateDatabase() {
//         ConnectionDB.db.exec('drop database stores')
//     }

//      static setDatabaseName(db: string) {
//         this.databaseName = db;
//     }

//     private static connectDatabase() {
//         ConnectionDB.db = new this.managerDb.Database(`./${this.databaseName}`, (err) => {
//             if (err) throw err;
//             console.log('Database connected');
//         })
//     }

//     static close() {
//         if (ConnectionDB.db) {
//             ConnectionDB.db.close();
//         }
//     }
// }

import { Sequelize } from "sequelize";
import { container } from "./injector";


export class Connection {
    sequelize: Sequelize;
    constructor() {
        this.sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "./stores.db",
        });
        
        this.sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        })

        container.register('sequelize', this.sequelize);
    }




}