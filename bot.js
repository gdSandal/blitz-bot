const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 's!ping') {
    print('pong');
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
