const Telegraf = require('telegraf')
const config = require('./cfg.json')


const app = new Telegraf(config.token)

app.start((ctx) => ctx.reply('Привет! Это не просто бот, а супер-бот-гид по всему что происходит в Петербурге, если тебе интересно, то продолжим?/n'))

app.startPolling()