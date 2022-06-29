
async function execute(user,msg){

    const database = require('../database/db');
    const Usuarios = require('../database/usuarios');
    await database.sync();
    const usuario = await Usuarios.findOne(
        {
            attributes:['nome'],
            where: {userId: user}
        }
        );
  
    // Verificação de cadastro
    if(usuario !== null){
        let message = `Olá ${usuario.nome}!\n\nVocê tem chamados em aberto ....`
        return[message]
    }else{
        await Usuarios.create({
            userId: user,
            stage: 1,
        })
        let message = '*Helpdesk informática saúde*\nSecretaria Municipal de Saúde\nPrefeitura de São francisco do Sul\nEste é um canal de atendimento helpdesk para funcionários da saúde.\n\nDigite o seu *nome* para iniciarmos seu atendimento.\nOu digite *sair* para sair.'
        return[message]
    }

}
exports.execute = execute;
