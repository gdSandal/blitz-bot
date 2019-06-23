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


client.on('message', msg => {
 if (msg.content.startsWith('sa/news')) {

const args = message.content.split(" ");
const mg = args.slice(1)
const role = message.guild.roles.find(role => role.name === “Newsletter”);

for (let i = 0; i < message.guild.members.size; i++) {
    if (message.guild.members[i].roles.has(role.id)) {
        message.guild.members[i].user.send(mg.join(" "));
    }}
}});

client.on('message', msg => {
 if (msg.content.startsWith('sa/1')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   title: "Welcome to Sanctum!",
   description: "`Thanks for joining my private server! - Sandal`\n**Socials Hyperlink:** http://note.ly/sanctum\n__Look over the rules before talking.__",
}});
 }
});
	 
client.on('message', msg => {
 if (msg.content.startsWith('sa/0')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
    image: {
    url: "https://media.discordapp.net/attachments/470359851227414532/591844595642400769/image0.png",
   },
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/2')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   image: {
   url: "https://media.discordapp.net/attachments/470359851227414532/592069380645322752/image0.png",
   },
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/3')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   title: "Rules",
   description: "**{1}** `No Spam`\n**{2}** `No coercive arguments`\n**{3}** `Do not leak chats`\n**{4}** `Stay topical`",
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/4')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   image: {
   url: "https://media.discordapp.net/attachments/470359851227414532/592069419413536779/image0.png",
   },
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/5')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   title: "ROLES",
   description: "`Assign color in:` **#『role-shrine』**\nReach *level 10* to unlock more colors.\n**Capo** is a moderator role entrusted by Sandal only.",
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/6')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   image: {
   url: "https://media.discordapp.net/attachments/470359851227414532/592069402078216222/image0.png",
   },
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/7')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   title: "GUIDE",
   description: "**Map of Channels**:\n**#『sanctum』** ~ `Main chat`\n**#『topic』** ~ `Alternative chat`\n**#『qotd』** ~ `Question of the day`\n**#『role-shrine』** ~ `Roles here`",
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/8')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   image: {
   url: "https://media.discordapp.net/attachments/470359851227414532/592069436807053321/image0.png",
   },
}});
 }
});

client.on('message', msg => {
 if (msg.content.startsWith('sa/9')) {
  msg.delete();
  msg.channel.send({embed: {
   color: 15868795,
   title: "Information",
   description: "Type `s/sub` to Subscribe to the new **Sanctum Newsletter!**\n`This is a private server for Sandal's friends and acquaintances, Please be calm and respectful to others.`\n**s/help** for commands list\n`Since 7/20/18    <3`",
}});
 }
});



client.on('message', msg => {
 if (msg.content.startsWith("s/entrust")) {
 if (!msg.member.hasPermission("MANAGE ROLES")) return;
  let rmember = msg.mentions.members.first();
  let role = msg.guild.roles.find(r => r.name === "Capo");
  if (!rmember) return;
  msg.channel.send({ embed: {
   color: 15868795,
   title: rmember.user.username + " has achieved the rank of **Capo!**",
   description: "Congratulations " + rmember + "!"
  }});
  rmember.addRole(role);
 }
});

client.on('message', msg => {
 if (msg.content === "s/sub") {
  let h = msg.member;
  let role = msg.guild.roles.find(r => r.name === "Newsletter");
	 if (!h.roles.has(role.id)){
  msg.channel.send({ embed: {
   color: 15868795,
   title: msg.author.username + ", You are now **subscribed** to the Sanctum newsletter!",
   description: "Type **s/sub** to revoke this access"
  }});
  h.addRole(role);
 }else {
    h.removeRole(role);
	msg.channel.send({ embed: {
   color: 15868795,
   title: msg.author.username + ", You are now **unsubsribed** from the Sanctum newsletter.",
   description: "Type **s/sub** to get access again"
	}});
 }}
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

client.on('guildMemberRemove', member => {
 let log = client.channels.get("538879270999556147");
 log.send({ embed: {
  color: 16007746,
  title: member.displayName + " Has left or been kicked",
  timestamp: new Date(),
 }});
});

client.on('guildMemberAdd', member => {
 let log = client.channels.get("538879270999556147");
 log.send({ embed: {
  color: 5698626,
  title: member.displayName + " Has joined",
  timestamp: new Date(),
 }});
});

client.on('messageUpdate', (oldMsg, newMsg) => {
 if (oldMsg.content.startsWith("http")) return;
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
 if (msg.content.startsWith("s/heavensdoor")) {
 let u = msg.mentions.members.first();
 if(!u) return msg.channel.send("please include a member name").then ((msg) => msg.delete(2000));
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
    value: "- - - - - - - - - - - -"
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
    value: u.presence.status
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
 if (msg.content.startsWith("s/shout")) {
  let args = msg.content.split(" ").slice(1);
  let a = msg.author;
  if (!args.join(" ")) return;
  client.fetchUser('305916957633413130').then((user) => {
    user.send(a + " says: " + args.join(" "));
  });
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
  if (!rmember) return;
  msg.channel.send(rmember + " now has the " + role + " role!");
  rmember.addRole(role);
 }
});


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
  if (!msg.member.hasPermission("MANAGE MESSAGES")) return;
   let args = msg.content.split(" ").slice(1);
      msg.channel.bulkDelete(args);
      msg.channel.send("Cleared " + args.join(" ") + " messages").then(msg => msg.delete(4000));
}
});

client.on('message', msg => {
  if (msg.content.startsWith('s/kick')) {
  if (!msg.member.hasPermission("KICK MEMBERS")) return;
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
  const channel = member.guild.channels.find(ch => ch.name === "『sanctum』");
  if (!channel) return;
  channel.send({ embed: {
   color: 15868795,
   title: "Welcome to **Sanctum!** " + member.displayName,
   image: {
    url: "https://cdn.discordapp.com/attachments/470359851227414532/539682548985495582/image0.png"
   },
   description: "Check #『outpost』& give yourself a color in #『role-shrine』"
  }});
});

client.on('message', msg => {
  if (msg.content === 's/info') {
    msg.channel.send({embed: {
  color: 15868795,
  title: "Requiem - by Sandal",
  image: {
  url: "http://i.imgur.com/akzRJIF.jpg",
  },
  description: "Version **1.0.5** | Since 1/28/18",
  fields: [{
    name: "Running on: " + msg.guild.name,
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
