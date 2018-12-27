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

client.on('message', msg => {
  if (msg.content === 's/userinfo') {
    msg.channel.send({embed: {
  color: 15868795,
  title: "User Information",
  thumbnail: {
  url: msg.author.avatarURL,
  },
  fields: [{
    name: msg.author
  },
  ]
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
