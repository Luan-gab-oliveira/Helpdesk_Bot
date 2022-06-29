const Sequelize =  require('sequelize');
const database = require('./db');

const Session = database.define('session',
    {
        userId:
        {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        stage:
        {
            type: Sequelize.INTEGER,
            allowNull: false

        },
        option:
        {
            type: Sequelize.INTEGER,
            allowNull: false

        }
    }
);

Session.sync();
module.exports = Session;
