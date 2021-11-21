const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);

module.exports = db;


