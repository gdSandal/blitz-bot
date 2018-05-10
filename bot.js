const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 's!ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 's!info') {
    msg.reply('`v0.1.3`');
  }
});

client.on('message', msg => {
  if (msg.content === 's!embed') {
    msg.reply({embed: {
  color: 3447003,
  description: "This is an embed!"
}});

  }
});

client.login(process.env.BOT_TOKEN);
