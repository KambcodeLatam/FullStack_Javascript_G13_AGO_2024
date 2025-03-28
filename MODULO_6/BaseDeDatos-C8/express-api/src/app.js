import env from './config/env.js';
import { Server } from "./server.js";


import { sequelize } from './db/sequelize.js';
import movieRoutes from './routes/movies.routes.js';


//models
import './models/index.js';




async function main () {


    try {
        await sequelize.authenticate();
        console.log('Connection has been established succesfully');

        await sequelize.sync({ force: false });
        console.log('All models were synchronized successfully.');

        const server = new Server(env.port, movieRoutes);
        server.start();

       
    } catch (error) {
        console.error('Unable to connect to the database');
    }
}

main();

