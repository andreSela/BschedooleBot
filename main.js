require('dotenv').config();

const axios = require("axios");
const botToken = process.env.BOT_TOKEN;
const chatId = process.env.BSC_GROUP_ID;
const message = "srvBackup è stato avviato correttamente"
const url = 'https://api.telegram.org/bot' + botToken + '/sendMessage'

axios.post(url, {
    chat_id: chatId,
    text: message,
})
  
