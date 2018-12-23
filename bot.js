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
  description: "`𝕨𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕞𝕪 𝕤𝕖𝕣𝕧𝕖𝕣!`\n━━━━━━━━━━━━━━━━━━\nThank you for coming!\nBelow are the rules and channel info!\nPlease read these before chatting or using shrines!"
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/opline') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "━━━━━━━━━━━━━━━━━━"
}});
  }
});

      
client.on('message', msg => {
  if (msg.content === 's/op3') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "`𝕣𝕦𝕝𝕖𝕤 𝕠𝕦𝕥𝕡𝕠𝕤𝕥`\n━━━━━━━━━━━━━━━━━━\n• No bullying! try to be nice\n• No spam, (emotes/msgs/images/etc.)\n• No violence, gore, or graphic content\n• No loopholing rules / Disrespect\n• No leaking private chats!"
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/op4') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "`𝕔𝕙𝕒𝕟𝕟𝕖𝕝 𝕚𝕟𝕗𝕠𝕣𝕞𝕒𝕥𝕚𝕠𝕟`\n━━━━━━━━━━━━━━━━━━\n#outpost ~ Info & rules\n#sanctum ~ Main chat lobby\n#gdshrine ~ GD content only\n#jjbashrine ~ Jojo content only\n#roleshrine ~ Give yourself a color\n#qotd ~ Question of the day\n#new ~ Updates & stuff"
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/op5') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "`𝕣𝕠𝕝𝕖𝕤 & 𝕤𝕥𝕦𝕗𝕗`\n━━━━━━━━━━━━━━━━━━\nYou can find **color roles** in the\nrole shrine, These are self-assignable.\n \nYou can unlock more roles when you reach\nrank 10 amari levels."
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/op6') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "`𝕙𝕒𝕧𝕖 𝕗𝕦𝕟!`\n━━━━━━━━━━━━━━━━━━\nIf you have any questions just ask me!\n**Enjoy the Server!\nFor more rules and info, check #new"
}});
  }
});

client.login(process.env.BOT_TOKEN);
