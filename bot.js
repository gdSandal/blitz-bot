const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 client.user.setPresence({
    game: {
        name: 'use s/help',
        type: 0
    }
});
});


client.on('message', msg => {
 if (msg.content.startsWith('s/say')) {
 let args = msg.content.split(" ").slice(1);
  msg.delete();
  msg.channel.send(args.join(" "));
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('s/stand')) {
 let args = msg.content.split(" ").slice(1)
  msg.channel.send({embed: {
   color: 15868795,
   title: "s/stand | JJBA Stand Stats",
   thumbnail: {
    url: "http://i.imgur.com/Vqypytw.jpg"
   },
   fields: [{
    name: "Stand name:",
    value: args.join(" ")
   },
   {
    name: "Wiki Page:",
    value: "Click here: " + "http://jojo.wikia.com/wiki/" + args.join("_")
   },
   {
    name: "Image:",
    value: "Click here: " + "http://jojo.wikia.com/wiki/List_of_Stands?file=" + args.join("") + "AvAnim.png"
   },
   ],
   footer: {
    text: "type - s/standhelp for troubleshooting"
   }
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('s/embedsay')) {
 let args = msg.content.split(" ").slice(1);
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   description: args.join(" ")
}});
 }
});
  
client.on('message', msg => {
  if (msg.content === 's/clear') {
      msg.channel.bulkDelete(10);
      msg.channel.send("Cleared").then(msg => msg.delete(2000));
}
});

client.on('message', msg => {
 if (msg.content === 's/rcolor') {
  let randomcolor = Math.floor(Math.random() * 10000000);
  msg.channel.send({embed: {
   color: randomcolor,
   description: "Random color [decimal]: " + randomcolor
}});
  }
});

client.on('message', msg => {
 if (msg.content === 's/rnumber') {
  let randomnumber = Math.floor(Math.random() * 10 + 1);
  msg.channel.send({embed: {
   color: 15868795,
   description: "RNG Result: " + randomnumber
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
  if (msg.content === 's/janken') {
    let results = ["Paper", "Rock", "Scissors"];
    let resultsIndex = Math.round(Math.random() * results.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "Janken Result: " + results[resultsIndex]
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/rstand') {
    let a = ["S", "A", "B", "C", "D", "E",];
    let aIndex = Math.round(Math.random() * a.length);
    let b = ["S", "A", "B", "C", "D", "E",];
    let bIndex = Math.round(Math.random() * b.length);
    let c = ["S", "A", "B", "C", "D", "E",];
    let cIndex = Math.round(Math.random() * c.length);
    let d = ["S", "A", "B", "C", "D", "E",];
    let dIndex = Math.round(Math.random() * d.length);
    let e = ["S", "A", "B", "C", "D", "E",];
    let eIndex = Math.round(Math.random() * e.length);
    let f = ["S", "A", "B", "C", "D", "E",];
    let fIndex = Math.round(Math.random() * f.length);
    msg.channel.send({embed: {
      color: 15868795,
      title: "Stand Stats Generator:",
      fields: [{
     name: "**POWER**",
     value: a[aIndex],
     inline: true
     },
     {
     name: "**SPEED**",
     value: b[bIndex],
     inline: true
     },
     {
     name: "**RANGE**",
     value: c[cIndex],
     inline: true
     },
     {
     name: "**DURABILITY**",
     value: d[dIndex],
     inline: true
     },
     {
     name: "**PRECISION**",
     value: e[eIndex],
     inline: true
     },
     {
     name: "**POTENTIAL**",
     value: f[fIndex],
     inline: true
     },
     ],
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/coin') {
    let outcome = ["Heads", "Tails"];
    let outcomeIndex = Math.round(Math.random() * outcome.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "Coinflip Result: " + outcome[outcomeIndex]
}});
  }
});
    
client.on('message', msg => {
  if (msg.content.startsWith('s/8ball')) {
    let ball = ["yes", "no", "maybe", "it is possible", "perhaps", "absolutely not", "it is likely", "it is unlikely"];
    let ballIndex = Math.round(Math.random() * ball.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "8 ball says: " + ball[ballIndex]
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
