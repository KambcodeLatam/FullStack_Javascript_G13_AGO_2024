const express = require('express');
const app = express();
const env = require('./config/env.js');

const { sequelize } = require('./db/sequelize.js');
const movieRoutes = require('./routes/movies.routes.js');


async function main () {

    app.use(express.json());
    app.use(movieRoutes);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established succesfully');

        app.listen(env.port, () => {
            console.log(`Server running at http://localhost:${env.port}/`);
        });
    } catch (error) {
        console.error('Unable to connect to the database');
    }
}

main();



