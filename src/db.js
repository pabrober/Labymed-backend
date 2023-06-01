import config from "./config";
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(`${config.dbName}`, `${config.dbUser}`, `${config.dbPassword}`, {
  host: 'localhost',
  dialect: 'mssql' 
});

export default sequelize