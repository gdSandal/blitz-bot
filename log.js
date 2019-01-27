const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
if (msg.content.startsWith("s/log")) {
msg.channel.send("yes. log.");
}});

client.login(process.env.BOT_TOKEN);
