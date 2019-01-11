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
 if (msg.content === 's/test') {
  const mss = msg.channel.awaitMessages(msg => {
   return msg.content.includes("hi");
  }, (5000));
  msg.channel.send("ok");
 }
});
  

client.on('message', msg => {
 if (msg.content === 's/slots') {
 let s = ["💰", "🍒", "🍊", "💎", "🍀", "🍓", "💵", "🎲", "🎯",];
 let sI = Math.floor(Math.random() * s.length);
 let x = ["💰", "🍒", "🍊", "💎", "🍀", "🍓", "💵", "🎲", "🎯",];
 let xI = Math.floor(Math.random() * x.length);
 let y = ["💰", "🍒", "🍊", "💎", "🍀", "🍓", "💵", "🎲", "🎯",];
 let yI = Math.floor(Math.random() * y.length);
msg.channel.send('```_________\n|_______|/\n|💰🍒🍊|/      Loading.\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```')
.then((msg)=>{
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|🎲🎯🍓|/      Loading..\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 500);
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|🍒🍊💰|/      Loading...\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 1000);
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|💎🍀💵|/      Loading....\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 1500);
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|' + s[sI] + x[xI] + y[yI] + '|/   RESULT:  [' + s[sI] + x[xI] + y[yI] + ']\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 2000);
});
}});


client.on('message', msg => {
 if (msg.content === 's/help') {
const filter = (reaction, user) => {
    return ['⏩', '⏯'].includes(reaction.emoji.name) && user.id === msg.author.id;
}
  msg.channel.send({embed: {
   color: 15868795,
   title: 's/help - **Help Guide**',
   description: '__Table of Contents__',
   fields:
   [{
    name: '**Page 1:**',
    value: '-  Moderation Commands'
   },
    {
     name: '**Page 2:**',
     value: '-  Utility Commands'
    },
    {
     name: '**Page 3:**',
     value: '-  Fun Commands'
    },
    {
     name: '[React ⏩ to go to the next page]',
     value: '*[React ⏯ now to cancel]*'
    },
    ],
   footer: {
    text: 'React to navigate pages [0/3]'
   }
  }}).then(msg => {
  msg.react('⏯').then(() => msg.react('⏩'));
msg.awaitReactions(filter, { max: 3, time: 60000 })
    .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '⏩') {
         reaction.remove(reaction.users.last());
            msg.edit({embed: {
   color: 15868795,
   title: '**Help Page 3**',
   description: '__Fun Commands__',
   fields:
   [{
    name: '**s/slots**',
    value: '-  Play casino slots'
   },
    {
     name: '**s/rcolor**',
     value: '-  Generate a random color'
    },
    {
     name: '**s/rnumber**',
     value: '-  Generate a random number 1-10'
    },
    {
     name: '**s/8ball** *<question>*',
     value: '-  Ask a 8ball a question'
    },
    {
    name: '**s/coin**',
    value: '-  Flips a coin'
    },
    {
     name: '**s/janken**',
     value: '-  Play a game of R/P/S'
    },
    ],
   footer: {
    text: 'Page [3/3]'
   }
   }});
        }else {
         msg.delete();
        }
    })
   .then(msg.awaitReactions(filter, { max: 2, time: 60000 })
    .then(collected => {
        const reactiont = collected.first();
    if (reactiont.emoji.name === '⏩') {
     reactiont.remove(reactiont.users.last());
            msg.edit({embed: {
   color: 15868795,
   title: '**Help Page 2**',
   description: '__Utility Commands__',
   fields:
   [{
    name: '**s/say** *<text>*',
    value: '-  Requiem responds with <text>'
   },
    {
     name: '**s/embedsay** *<text>*',
     value: '-  Requiem responds with *embedded* <text>'
    },
    {
     name: '**s/ping**',
     value: '-  Check bot latency'
    },
    {
     name: '**s/info**',
     value: '-  Obtain bot info'
    },
    {
     name: '**s/userinfo**',
     value: '-  Obtain self info'
    },
    ],
   footer: {
    text: 'React to navigate pages [2/3]'
   }
   }});
        }else {
         msg.delete();
        }
   }))
 .then(msg.awaitReactions(filter, { max: 1, time: 60000 })
    .then(collected => {
        const reactiont = collected.first();
    if (reactiont.emoji.name === '⏩') {
     reactiont.remove(reactiont.users.last());
            msg.edit({embed: {
   color: 15868795,
   title: '**Help Page 1**',
   description: '__Moderation Commands__',
   fields:
   [{
    name: '**s/clear** *<amount>*',
    value: '-  Clears <amount> messages'
   },
    {
     name: '**s/kick** *<mention>*',
     value: '-  Kicks <mentioned> user'
    },
    ],
   footer: {
    text: 'React to navigate pages [1/3]'
   }
   }});
        }else {
         msg.delete();
        }
   }));
  });
  }});
   

client.on('message', msg => {
 if (msg.content.startsWith('s/say')) {
 let args = msg.content.split(" ").slice(1);
  msg.delete();
  msg.channel.send(args.join(" "));
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
  if (msg.content.startsWith('s/clear')) {
  if (!msg.member.hasPermission("MANAGE MESSAGES")) return msg.reply("error");
   let args = msg.content.split(" ").slice(1);
      msg.channel.bulkDelete(args);
      msg.channel.send("Cleared " + args.join(" ") + " messages").then(msg => msg.delete(4000));
}
});

client.on('message', msg => {
  if (msg.content.startsWith('s/kick')) {
  if (!msg.member.hasPermission("MANAGE MESSAGES")) return msg.reply("error");
   let kuser = msg.mentions.members.first();
      kuser.kick();
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
    let resultsIndex = Math.floor(Math.random() * results.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "Janken Result: " + results[resultsIndex]
}});
  }
});

client.on('message', msg => {
  if (msg.content === 's/rstand') {
    let a = ["A₅", "B₄", "C₃", "D₂", "E₁", "**S**",];
    let aIndex = Math.floor(Math.random() * a.length);
    let b = ["A₅", "B₄", "C₃", "D₂", "E₁", "**S**",];
    let bIndex = Math.floor(Math.random() * b.length);
    let c = ["A₅", "B₄", "C₃", "D₂", "E₁", "**S**",];
    let cIndex = Math.floor(Math.random() * c.length);
    let d = ["A₅", "B₄", "C₃", "D₂", "E₁", "**S**",];
    let dIndex = Math.floor(Math.random() * d.length);
    let e = ["A₅", "B₄", "C₃", "D₂", "E₁", "**S**",];
    let eIndex = Math.floor(Math.random() * e.length);
    let f = ["A₅", "B₄", "C₃", "D₂", "E₁", "**S**",];
    let fIndex = Math.floor(Math.random() * f.length);
    msg.channel.send({embed: {
      color: 15868795,
      title: "Stand Stats Generator:",
      thumbnail: {
       url: "http://i.imgur.com/4FB8XRp.jpg"
      },
      fields: [{
     name: "**POWER :**",
     value: "   **»**   " + a[aIndex],
     inline: true
     },
     {
     name: "**SPEED :**",
     value: "   **»**   " + b[bIndex],
     inline: true
     },
     {
     name: "**RANGE :**",
     value: "   **»**   " + c[cIndex],
     inline: true
     },
     {
     name: "**DURABILITY :**",
     value: "   **»**   " + d[dIndex],
     inline: true
     },
     {
     name: "**PRECISION :**",
     value: "   **»**   " + e[eIndex],
     inline: true
     },
     {
     name: "**POTENTIAL :**",
     value: "   **»**   " + f[fIndex],
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
      description: "<a:coin1:532740590358757389><a:coin2:532740637473112094>" + "   Coinflip Result:\n" + "<a:coin3:532740690896093195><a:coin4:532740736735641611>          " + outcome[outcomeIndex] 
}});
  }
});
    
client.on('message', msg => {
  if (msg.content.startsWith('s/8ball')) {
    let ball = ["yes", "no", "maybe", "possibly", "perhaps", "absolutely not", "it is likely", "it is unlikely"];
    let ballIndex = Math.round(Math.random() * ball.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "8 ball says: " + ball[ballIndex]
}});
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === args);
  if (!channel) return;
  channel.send(`Welcome to the server! ${member}`);
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
