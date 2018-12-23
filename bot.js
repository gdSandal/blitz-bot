const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 's/ping') {
    msg.channel.send('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 's/info') {
    msg.channel.send('`v0.2.0`');
  }
});

client.on('message', msg => {
  if (msg.content === 's/op1') {
    msg.channel.send({embed: {
  color: 15868795,
  image: {
  url: "http://i.imgur.com/PofzIuj.jpg"
  }
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/op2') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "`𝕨𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕞𝕪 𝕤𝕖𝕣𝕧𝕖𝕣!`"
    
}});
  }
});

client.login(process.env.BOT_TOKEN);
