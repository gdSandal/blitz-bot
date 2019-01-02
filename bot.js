const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 client.user.setPresence({
    game: {
        name: 'HAPPY 2019!',
        type: 0
    }
});
});

client.on('message', msg => {
  if (msg.content === 's/clear') {
      msg.channel.bulkDelete(10);
      msg.channel.send("Cleared").then(msg => msg.delete(2000));
}
});

client.on('message', msg => {
 if (msg.content === 's/rcolor') {
  let randomcolor = Math.floor(Math.random() * 100000000 + 1);
  msg.channel.send({embed: {
   color: randomcolor,
   description: randomcolor
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/ping') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "PONG",
  footer: {
  text: "Latency: " + client.ping + " ms"
  }
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/coin') {
    let outcomes = ["Heads", "Tails"];
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "Result: " + outcomes[outcomesIndex]
}});
  }
});
    
client.on('message', msg => {
  if (msg.content.startsWith('s/8ball')) {
    let outcomes = ["yes", "no", "maybe", "it is possible", "perhaps", "absolutely not", "it is likely", "it is unlikely"];
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: outcomes[outcomesIndex]
}});
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'sanctum');
  if (!channel) return;
  channel.send(`Welcome to the server! ${member}`);
});

client.on('message', msg => {
  if (msg.content === 's/help') {
    msg.channel.send({embed: {
  color: 15868795,
  title: "s/help | Commands List",
  fields: [{
    name: "**s/ping:**",
    value: "Retrieve bot latency."
  },
  {
    name: "**s/info:**",
    value: "Recieve bot information page."
  },
  {
    name: "**s/userinfo:**",
    value: "Recieve self information page."
  },
  {
    name: "**s/coin:**",
    value: "Flip a coin."
  },
  ],
      footer: {
        text: "Message user - Sandal#8314 for details"
      }
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/userinfo') {
    const user = msg.author.username;
    msg.channel.send({embed: {
  color: 15868795,
  title: "User Information - " + user,
  thumbnail: {
  url: msg.author.avatarURL,
  },
  fields: [{
    name: "Name:",
    value: user
  },
  {
    name: "Tag:",
    value: "@" + user + "#" + msg.author.discriminator
  },
  {
    name: "User ID:",
    value: msg.author.id
  },
  {
    name: "Joined:",
    value: msg.author.createdAt
  },
  ],
      timestamp: new Date(),
      footer: {
        text: user + " | " + msg.guild.name + " 2019"
      }
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/info') {
    msg.channel.send({embed: {
  color: 15868795,
  title: "Requiem - by Sandal",
  image: {
  url: "http://i.imgur.com/akzRJIF.jpg",
  },
  description: "Version **0.5.1** | Since 12/27/18",
  fields: [{
    name: "Currently hosted on " + msg.guild.name,
    value: "Host server run since 7/21/18"
  },
  {
    name: "View the bot code:",
    value: "Github sourcecode - [click here](https://github.com/gdSandal/blitz-bot)"
  },
  {
    name: "Status - __ONLINE__",
    value: "Powered by [Heroku](https://heroku.com)"
  }
  ],
      timestamp: new Date(),
      footer: {
        text: msg.guild.name + " 2019"
      }
  
}});
  }
});

  

client.login(process.env.BOT_TOKEN);
