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
 if (msg.guild.DMChannel) return;
 if (msg.author.bot) return;
});

//
//log commands below
//

client.on('messageDelete', msg => {
 let log = client.channels.get("538879270999556147");
 log.send({ embed: {
  color: 16007746,
  title: "**Message deleted** in #" + msg.channel.name,
  description: msg.author + "’s message was deleted: \n" + msg.content,
  timestamp: new Date(),
 }});
});

client.on('guildMemberRemove', msg => {
 let log = client.channels.get("538879270999556147");
 log.send({ embed: {
  color: 16007746,
  title: "${member} Has left or been kicked",
  timestamp: new Date(),
 }});
});

client.on('messageUpdate', (oldMsg, newMsg) => {
 let log = client.channels.get("538879270999556147");
 log.send({ embed: {
  title: "**Message updated** in #" + oldMsg.channel.name,
  description: oldMsg.author + "’s message was edited:",
  fields: [{
   name: "**Original message:**",
   value: oldMsg.content
  }, {
   name: "**Edited message:**",
   value: newMsg.content
  },
  ],
  timestamp: new Date(),
 }});
});


//
//log commands above
//

client.on('message', msg => {
 if (msg.content.startsWith("s/u")) {
 let u = msg.mentions.members.first();
 if(!u) return msg.channel.send("please include a member name");
  msg.channel.send({ embed: {
   color: 16051778,
   thumbnail: {
    url: u.user.avatarURL
   },
   description: "[HEAVEN'S DOOR](https://youtu.be/e108Q6P5c6Y)",
   image: {
    url: "https://cdn.discordapp.com/attachments/470359851227414532/538869570694283264/image0.gif"
   },
   fields:
   [{
    name: u.displayName + "’s Information",
    value: "- - - - - - - -"
   },
    {
    name: "User ID:",
    value: u.id
   },
    {
    name: "Join date:",
    value: u.user.createdAt
   },
    {
    name: "Presence:",
    value: u.presence
   },
    {
    name: "Verified:",
    value: "No"
   },
   ],
   timestamp: new Date(),
  }});
 }});

client.on('message', msg => {
 if (msg.content.startsWith("s/moodyblues")) {
 let u = msg.mentions.members.first();
 if(!u) return;
 let x = u.lastMessage;
  msg.channel.send({ embed: {
   color: 8024034,
   description: "[MOODY BLUES](https://youtu.be/EseeFCVgjhg)",
   image: {
    url: "https://cdn.discordapp.com/attachments/470359851227414532/538862326498066463/image0.gif"
   },
   fields:
   [{
    name: u.displayName + "'s last message:",
    value: "**" + u.displayName + " said: **“" + x.content + "”"
   },
   ],
   footer: {
    text: "Message ID: " + x.id
   },
  }});
 }});

client.on('message', msg => {
 if (msg.content.startsWith("s/test")) {
 let u = msg.mentions.members.first();
 if(!u) return;
 msg.channel.fetchMessages({ limit: 100000 })
  .then(messages => msg.channel.send(`Received ${messages.size} messages`));
 }
});

client.on('message', msg => {
 if (msg.content.startsWith("s/theworld")) {
  if (!msg.member.hasPermission("MANAGE PERMISSIONS")) return;
 msg.channel.send({ embed: {
  color: 15868795,
  title: "Channel temporarily locked",
  description: "[ZA~WARUDO](https://youtu.be/-FT23AwNPOM) | Time stopped",
  image: {
   url: "https://cdn.discordapp.com/attachments/470359851227414532/535492022748839936/image0.gif"
  },
  footer: {
   text: "Channel freeze lasts for 10 seconds"
  },
 }}).then((msg) => {
  setTimeout(function(){
  msg.edit({ embed: {
   color: 15868795,
   title: "__時 は 動き出す__ ~ **Time Resumes**",
   description: "Channel has been unlocked",
   image: {
    url: "https://cdn.discordapp.com/attachments/470359851227414532/535589451695652865/image0.gif"
   },
  }});
  }, 9500);
 });
 msg.channel.overwritePermissions(msg.guild.defaultRole, {
  SEND_MESSAGES: false
  });
  setTimeout(function(){
  msg.channel.overwritePermissions(msg.guild.defaultRole, {
   SEND_MESSAGES: true
  });
  }, 10000);
 }});
        
client.on('message', msg => {
 if (msg.content.startsWith("s/role")) {
 if (!msg.member.hasPermission("MANAGE ROLES")) return msg.channel.send("insufficient permissions");
  let rmember = msg.mentions.members.first();
  let args = msg.content.split(" ").slice(2);
  let role = msg.guild.roles.find(r => r.name === args.join(" "));
  if (!role) return;
  msg.channel.send(rmember + " now has the " + role + " role!");
  rmember.addRole(role);
 }
});
  
client.on('message', msg => {
 if (msg.content === 's/test') {
  const filter = m => m.author.id === msg.author.id;
  msg.channel.send("Choose value")
  .then(msg => {
  msg.channel.awaitMessages(filter, { max: 1, time: 60000 })
  .then(collected => {
   const r = collected.first();
   if (r.content === 'red') {
   msg.channel.send("test ok");
   }else {
   msg.channel.send("invalid");
   }
});
});
}});


client.on('message', msg => {
 if (msg.content.toLowerCase() === 's/roulette') {
  
  let rb = ["red", "black"];
  let rbi = Math.floor(Math.random() * rb.length);
  let nb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  let nbi = Math.floor(Math.random() * nb.length);
  
  const filter = m => m.author.id === msg.author.id;
  msg.channel.send({embed: {
   color: 15868795,
   title: "Roulette!",
   description: "Send a message with your bet!",
   fields:
   [{
    name: "__NUMBER BET__",
    value: "type any number **0-36**"
    },
    {
     name: "__COLOR BET__",
     value: "type: '**red**' or '**black**'"
    },
    ],
  }})
  .then(msg => {
  msg.channel.awaitMessages(filter, { max: 1, time: 60000 })
  .then(collected => {
   const r = collected.first();
   if (r.content.toLowerCase() === "red") {
    if (r.content.toLowerCase() === rb[rbi]) {
     msg.channel.send({embed: {
      color:15868795,
      title: "**You bet on: ** 🔴 [RED]",
      description: "**Roulette Result: **" + rb[rbi] + " " + nb[nbi],
      fields: [{
       name: "__Your bet is a:__",
       value: "**WIN!** 🎉",
      },
      ],
     }});
    }else {
     msg.channel.send({embed: {
      color:15868795,
      title: "**You bet on: ** 🔴 [RED]",
      description: "**Roulette Result: **" + rb[rbi] + " " + nb[nbi],
      fields: [{
       name: "__Your bet is a:__",
       value: "**LOSS**",
      },
      ],
     }});
    }
   }else if (r.content.toLowerCase() === "black") {
    if (r.content.toLowerCase() === rb[rbi]) {
     msg.channel.send({embed: {
      color:15868795,
      title: "**You bet on:** [BLACK]",
      description: "**Roulette Result: **" + rb[rbi] + " " + nb[nbi],
      fields: [{
       name: "__Your bet is a:__",
       value: "**WIN!** 🎉",
      },
      ],
     }});
    }else {
        msg.channel.send({embed: {
      color:15868795,
      title: "**You bet on: ** [BLACK]",
      description: "**Roulette Result: **" + rb[rbi] + " " + nb[nbi],
      fields: [{
       name: "__Your bet is a:__",
       value: "**LOSS**",
      },
      ],
     }});
    }
   }else if (r.content === "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "10" || "11" || "12" || "13" || "14" || "15" || "16" || "17" || "18" || "19" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "27" || "28" || "29" || "30" || "31" || "32" || "33" || "34" || "35" || "36") {
    if (r.content === nb[nbi]) {
             msg.channel.send({embed: {
      color:15868795,
      title: "**You bet on: ** #️⃣ [" + r.content + "]",
      description: "**Roulette Result: **" + rb[rbi] + " " + nb[nbi],
      fields: [{
       name: "__Your bet is a:__",
       value: "**WIN 🎉**",
      },
      ],
     }});
    }else {
            msg.channel.send({embed: {
      color:15868795,
      title: "**You bet on: ** #️⃣ [" + r.content + "]",
      description: "**Roulette Result: **" + rb[rbi] + " " + nb[nbi],
      fields: [{
       name: "__Your bet is a:__",
       value: "**LOSS**",
      },
      ],
       footer: {
        text: "Invalid #'s are converted to a LOSS"
       }
     }});
    }
   }else {
   msg.channel.send("**err:** __invalid bet__, command cancelled");
   }
});
});
}});

  

client.on('message', msg => {
 if (msg.content === 's/slots') {
 let s = ["💰", "🍒", "🍊", "💎", "🍀", "🍓", "💵", "🎲", "🎯",];
 let sI = Math.floor(Math.random() * s.length);
 let x = ["💰", "🍒", "🍊", "💎", "🍀", "🍓", "💵", "🎲", "🎯",];
 let xI = Math.floor(Math.random() * x.length);
 let y = ["💰", "🍒", "🍊", "💎", "🍀", "🍓", "💵", "🎲", "🎯",];
 let yI = Math.floor(Math.random() * y.length);
msg.channel.send('```|[=𝕊𝕃𝕆𝕋𝕊=]|\n|=========|      Spinning.\n|{🍊🎯🍓}|      [.]\n|=========|```')
.then((msg)=> {
setTimeout(function(){
msg.edit('```|[=𝕊𝕃𝕆𝕋𝕊=]|\n|=========|      Spinning..\n|{🍒💎💰}|      [..]\n|=========|```');
}, 500);
setTimeout(function(){
msg.edit('```|[=𝕊𝕃𝕆𝕋𝕊=]|\n|=========|      Spinning...\n|{💵🍀🍀}|      [...]\n|=========|```');
}, 1000);
setTimeout(function(){
msg.edit('```|[=𝕊𝕃𝕆𝕋𝕊=]|\n|=========|      Spinning....\n|{💰🍊🎲}|      [....]\n|=========|```');
}, 1500);
setTimeout(function(){
msg.edit('```|[=𝕊𝕃𝕆𝕋𝕊=]|\n|=========|      🎰 RESULT::\n|{' + s[sI] + x[xI] + y[yI] + '}|      [' + s[sI] + x[xI] + y[yI] + ']\n|=========|```');
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
  if (!msg.member.hasPermission("KICK MEMBERS")) return msg.reply("error");
   let kuser = msg.mentions.members.first();
      kuser.kick();
}
});

client.on('message', msg => {
 if (msg.content === 's/rcolor') {
  let randomcolor = Math.floor(Math.random() * 10000000);
  msg.channel.send({embed: {
   color: randomcolor,
   description: "🎨 Random color [decimal]: " + randomcolor
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
      description: "Coinflip Result:" + outcome[outcomeIndex] 
}});
  }
});
    
client.on('message', msg => {
  if (msg.content.startsWith('s/8ball')) {
    let ball = ["yes", "no", "maybe", "possibly", "perhaps", "absolutely not", "it is likely", "it is unlikely"];
    let ballIndex = Math.round(Math.random() * ball.length);
    msg.channel.send({embed: {
      color: 15868795,
      description: "🎱 8 ball says: " + ball[ballIndex]
}});
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === "sanctum");
  if (!channel) return;
  channel.send(`Welcome to SANCTUM! ${member}`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase === 's/userinfo') {
    msg.channel.send({embed: {
  color: 15868795,
  title: "User Information - " + msg.author,
  thumbnail: {
  url: msg.author.avatarURL,
  },
  fields: [{
    name: "Name:",
    value: msg.author
  },
  {
    name: "Tag:",
    value: "@" + msg.author + "#" + msg.author.discriminator
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
        text: msg.author + " | " + msg.guild.name + " 2019"
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
