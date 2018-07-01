const { Client } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const { transform } = require('./owo')

const { BOT_TOKEN } = process.env

const bot = new Client()

bot.on('message', message => {
  if (message.author.bot) {
    return
  }

  if (message.content.indexOf('!') === 0) {
    const text = message.content.substring(1)

    message.reply(transform(text))
  }
})

bot.login(BOT_TOKEN)
