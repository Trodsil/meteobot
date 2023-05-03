"use strict";
const {Telegraf} = require("telegraf");
const bot = new Telegraf("5978748477:AAEJv_IOZMNtanF_Si3s0a79XIesFXGBjH0");



bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));