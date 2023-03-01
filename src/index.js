const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, 'Hello World');
});