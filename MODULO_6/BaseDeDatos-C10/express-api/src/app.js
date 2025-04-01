import env from './config/env.js';
import { Server } from "./server.js";
import { DataBaseNoSQL } from "./db/mongo.js";


//import { sequelize } from './db/sequelize.js';
import routes from './routes/routes.js';


//models
import './models/index.js';




async function main () {


    try {
        // await sequelize.authenticate();
        // console.log('Connection has been established succesfully');

        // await sequelize.sync({ force: false });
        // console.log('All models were synchronized successfully.');


        const connection = new DataBaseNoSQL();
        await connection._connect();
        console.log('Connection has been established succesfully');

        const server = new Server(env.port, routes);
        server.start();

       
    } catch (error) {
        console.error('Unable to connect to the database');
    }
}

main();

