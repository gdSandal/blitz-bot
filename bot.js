const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("s/");

client.on("ready", () => {
  console.log(`online`); 
  client.user.setActivity(`SANCTUM`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'info') {
    msg.reply('`v0.2.0`');
  }
});

client.on('message', msg => {
  if (msg.content === 'img') {
    msg.reply({embed: {
  color: 15868795,
  image: {
  url: "http://i.imgur.com/PofzIuj.jpg"
  }
}});
  }
});

client.login(process.env.BOT_TOKEN);
