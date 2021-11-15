const Discord = require('discord.js')
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client()
const config = require('./config.json')

client.on("ready", () => {
    console.log("Create by zac");
    client.user.setActivity(config.activity);
})

client.login(config.token)