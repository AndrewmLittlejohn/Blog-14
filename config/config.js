const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;

// credit to Bootcamp Main/UR-VIRT-FSF-PT-10-2022-U-LOLC/14-MVC/01-Activities/19-Ins_Middleware/config/connection.js
