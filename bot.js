const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 's/ping') {
    msg.channel.send({embed: {
  color: 15868795,
  description: "PONG"
}});
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'sanctum');
  if (!channel) return;
  channel.send('Welcome to' + guild.name + '${member}');
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
    name: "ID:",
    value: msg.author.id
  },
  {
    name: "Joined:",
    value: msg.author.createdAt
  },
  ],
      timestamp: new Date(),
      footer: {
        text: user + " | Sanctum 2018"
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
  description: "Version **0.3.0** | Since 12/27/18",
  fields: [{
    name: "A bot designed for Sanctum",
    value: "Server run since 7/21/18"
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
        text: "Sanctum 2018"
      }
  
}});
  }
});

  

client.login(process.env.BOT_TOKEN);
