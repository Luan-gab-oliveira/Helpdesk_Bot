module.exports = {
    db: {
        database: 'helpdesk',
        username: 'root',
        password: '',
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        define: {
            timestamps: true,
        },
    },

    sendGroups :{
        info: '',
        chamados: '',
        logs: ''
    },
}