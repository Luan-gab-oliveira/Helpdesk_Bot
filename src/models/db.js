const config = require('../config');
const Sequelize = require('sequelize');
const connect = new Sequelize(config.db);
module.exports = connect;