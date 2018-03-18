const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

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

db.updateValue(message.author.id + message.guild.id, 1). then(i => {
  
  let messages;
  if (i.value == 25) messages = 25;
  else if (i.value == 50) messages = 50;
  else if (i.value == 100) messages = 100;
  
  if (!isNaN(messages)) {
    db.updateValue('userLevel_${message.author.id + message.guild.id}',1).then(o => {
      message.channel.send(' **Congradulations!** You reached ${messages} Blix, and have leveled up! you are now level ${o.value}')
  }
});

exports.run - (bot, messages) -> {
  db.fetchObject(message.author.id + message.guild.id),then(i => {
  db.fetchObject('userLevel_${message.author.id + message.guild}').then(o => {
  message.channel.send('Current Blix: '' + (i.value + 1) + ''\nLevel: '' + o.value + ''');
 }
  });
   

client.login(process.env.BOT_TOKEN);
