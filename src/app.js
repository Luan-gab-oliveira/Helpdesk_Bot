const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
        
        let resp = ''

        client
        .sendText(message.from, resp)
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}