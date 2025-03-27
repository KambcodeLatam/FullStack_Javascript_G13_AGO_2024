const { Sequelize } = require('sequelize');
const env = require('../config/env.js')


const { databaseDB, dialect, hostDB, usernameDB, passwordDB, portDB } = env;

const sequelize = new Sequelize(databaseDB, usernameDB, passwordDB, {
  host: hostDB,
  dialect: dialect,
  port: portDB,
  logging: true,
});

sequelize.query(`
  CREATE TABLE IF NOT EXISTS Movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(50),
    releaseYear INT
  );
`).then(() => console.log('Movies table created'))
  .catch(err => console.error('Error creating Movies table:', err));

sequelize.query(`
  CREATE TABLE IF NOT EXISTS Directors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    nationality VARCHAR(50)
  );
`).then(() => console.log('Directors table created'))
  .catch(err => console.error('Error creating Directors table:', err));

module.exports = {
    sequelize,
};

