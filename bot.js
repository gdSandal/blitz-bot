const Discord = require('discord.js');

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
  if (msg.content === 's!img') {
    msg.reply({embed: {
  color: 15868795,
  image: {
  url: "http://imgur.com/PofzIuj"
  }
}});

  }
});

client.login(process.env.BOT_TOKEN);
