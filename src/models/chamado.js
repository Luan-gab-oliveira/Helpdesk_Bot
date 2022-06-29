const Sequelize =  require('sequelize');
const database = require('./db');
const Usuarios = require('./usuario');

const Chamados = database.define('chamados',
    {
        id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ocorrencia:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao:
        {
            type: Sequelize.STRING
        },
        status:
        {
            type: Sequelize.STRING
        }
    }
);

// 1 - 1
Chamados.belongsTo(Usuarios,{
    constraint: true,
    foreignKey:'idUsuario'
});

// 1 - N
Usuarios.hasMany(Chamados, {
    foreignKey:'idUsuario'
});

// Usuarios.sync();
Chamados.sync();
module.exports = Chamados;
