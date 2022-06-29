const Sequelize =  require('sequelize');
const database = require('./db');
const Session = require('./session');

const Usuarios = database.define('usuarios',
    {
        id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome:
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        localTrabalho:
        {
            type: Sequelize.STRING,
            allowNull: true

        }
    }
)

Usuarios.belongsTo(Session, {
    constraint: true,
    foreignKey: 'userId'
})

Usuarios.sync();

module.exports = Usuarios;
