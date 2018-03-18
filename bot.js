const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'b!ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'b!info') {
    msg.reply('**BlitzBot // v0.0.1** -Made by Sandal-');
  }
});

client.login(process.env.BOT_TOKEN);
