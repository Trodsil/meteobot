"use strict";
const {Telegraf} = require("telegraf");
const bot = new Telegraf("TOKEN");



bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
