
const DATABASE ="node_db";
const USER = "gamelab";
const PASSWORD= "c1469ec06c4acc4c";
const HOST= "localhost";
const PORT= "3388";
const Sequelize = require("sequelize");const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: "mysql",
    operatorsAliases: false,
  
    pool: {
      max: 5,     
      min: 0,     
      idle: 10000
    }
  });
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  module.exports = db;
  db.articles = require("./Sequelize.model.js")(sequelize, Sequelize);