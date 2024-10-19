require('dotenv').config();

const args = process.argv.slice(2);
const axios = require("axios");
const botToken = process.env.BOT_TOKEN;
const chatId = process.env.BSC_GROUP_ID;
const message = "srvBackup è stato avviato correttamente"
const url = 'https://api.telegram.org/bot' + botToken + '/sendMessage'
const idComando = args[0]
const rebootOk = 'rebootOk'

switch (idComando) {
    case rebootOk :
        axios.post(url, {
            chat_id: chatId,
            text: message,
        });
        break;
    default : 
        break;
          
}


