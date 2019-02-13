const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const pet = require('./pets.json');
const coins = require('./xp.json');


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


client.on("message", msg => {
  if(msg.content === "s/adopt"){
 const a = client.emojis.find(emoji => emoji.name === "common");	  
	  let p = ["Hedgehog " + a, "Lab " + a, "Wolf " + a, "Brown Cat " + a, "White Cat " + a, "Striped Cat " + a, "Monkey " + a, "Bunny " + a, "Red Fish " + a, "Blue Fish " + a, "Turtle " + a];
	  let pi = Math.floor(Math.random() * p.length);
	let u = msg.author;
		if(!coins[u.id]){
	  coins[u.id] = {
	    coins: 0
	  }}
	  	if(!pet[u.id]){
	  pet[u.id] = {
	    pet: "none",
	    name: "unnamed",
	    exp: 0
	  }}
		if(coins[u.id].coins < 100){
			msg.channel.send({ embed: {
				color: 15868795,
				title: "Not enough credits!",
				description: "You need **100¥** to adopt a pet!"
			}});
			return;
		}else {
		 coins[u.id] = {
	    coins: coins[u.id].coins - 100
	  };
	  pet[u.id] = {
	    pet: p[pi],
            name: "unnamed",
	    exp: 0
	  };
			
	  fs.writeFile("./xp.json", JSON.stringify (coins), (err) => {
	    if (err) console.log(err);
	  });
	  fs.writeFile("./pets.json", JSON.stringify (pet), (err) => {
	    if (err) console.log(err);
	  });
	msg.channel.send({ embed: {
		color: 15868795,
		title: u.username + " adopted a " + pet[u.id].pet,
		description: "Congratulations " + u.username + "!",
		fields: [{
			name: "Notice:",
			value: "If you previously had a pet, a new adoption sets free and replaces the previous pet"
		},
		 ],
		footer: {
			text: "You now own a pet! Type: ‘s/pet’ to view"
		}
	}});
		}
	}});
		

client.on("message", msg => {
  if(msg.content === "s/pet"){  
	  
	  if(!pet[msg.author.id]){
	  pet[msg.author.id] = {
	    pet: "none",
	    name: "unnamed",
	    exp: 0
	  }
	}
	  
  const a = client.emojis.find(emoji => emoji.name === "common");	  
  const b = client.emojis.find(emoji => emoji.name === "uncommon");
  const c = client.emojis.find(emoji => emoji.name === "rare");
  const d = client.emojis.find(emoji => emoji.name === "mythic");
	  
	  let uPet = pet[msg.author.id].pet;
	  let uName = pet[msg.author.id].name;
	  let uXp = pet[msg.author.id].exp;
	  
	  if(uPet === "none"){
	  msg.channel.send({embed: {
		  title: msg.author.username + " - None",
		  description: "**You don't have a pet!** \nUse any of the following commands to obtain a new pet:",
		  fields: [{
			  name: "**s/adopt** | Cost: 100¥",
			  value: "• Adopts a new pet!\n  `Rarity pool:` **[**" + a + "**]**"
		  },{
			  name: "**s/catch** | Cost: 500¥",
			  value: "• Catches a new pet\n  `Rarity pool:` **[**" + a + "-" + b + "-" + c + "**]**"
		  },{
			  name: "**s/hunt** | Cost: 1000¥",
			  value: "• Hunts a new pet\n  `Rarity pool:` **[**" + b + "-" + c + "-" + d + "**]**"
		  },
	          ],
	  }});
	  } else{
	  if(uPet === "Lab "+a){
		  var y = "http://i.imgur.com/HQQSKSO.jpg";
	  }
	    if(uPet === "Wolf "+a){
		  var y = "http://i.imgur.com/7zHH56f.jpg";
	  }
	    if(uPet === "Brown Cat "+a){
		  var y = "http://i.imgur.com/GcoIPyd.jpg";
	  }
	    if(uPet === "White Cat "+a){
		  var y = "http://i.imgur.com/sEfQDDO.jpg";
	  }
	    if(uPet === "Striped Cat "+a){
		  var y = "http://i.imgur.com/oFXZLPC.jpg";
	  }
	    if(uPet === "Monkey "+a){
		  var y = "http://i.imgur.com/l5E0jfF.jpg";
	  }
	    if(uPet === "Turtle "+a){
		  var y = "http://i.imgur.com/d361ijy.jpg";
	  }
	    if(uPet === "Bunny "+a){
		  var y = "http://i.imgur.com/aMudQ66.jpg";
	  }
	    if(uPet === "Blue Fish "+a){
		  var y = "http://i.imgur.com/sIE9WJS.jpg";
	  }
	    if(uPet === "Red Fish "+a){
		  var y = "http://i.imgur.com/caA0A7L.jpg";
	  }
	    if(uPet === "Hedgehog "+a){
		    var y = "http://i.imgur.com/9kQqCWb.jpg";
	  }
		  
		  //levels
		  if(uXp < 51){
			  var l = 1;
		  }
		  if((uXp > 50) && (uXp < 101)){
			  var l = 2;
		  }
		  if((uXp > 100) && (uXp < 251)){
			  var l = 3;
		  }
		  if((uXp > 250) && (uXp < 301)){
			  var l = 4;
		  }
		  if ((uXp > 300)){
			  var l = "MAX";
		  }
		  
	  msg.channel.send({embed: {
	         title: msg.author.username + "’s " + uPet,
		  fields: [{
			  name: "**LVL:** " + l + " | **XP:** " + uXp,
			  value: "**Pet name:** " + uName
		  },
	          ],
		 image: {
			 url: y
		 },
		  footer: {
			  text: "s/feed: [15¥] | s/rename: [30¥] | s/release: [0¥]"
		  },
	  }});
	  }
}});
client.on("message", msg => {
  if (msg.content.startsWith("s/feed")){
	 if((!pet[msg.author.id]) || (coins[msg.author.id] < 15)){
		 return;
	} else {
	let r = Math.floor(Math.random() * 10 + 5);
		coins[msg.author.id] = {
	    coins: coins[msg.author.id].coins - 15
	  };
	  let uPet = pet[msg.author.id].pet;
	  let uXp = pet[msg.author.id].exp;
          let uName = pet[msg.author.id].name;
	   pet[msg.author.id] = {
	    pet: uPet,
	    name: uName,
	    exp: uXp + r
	  };
		msg.channel.send({ embed: {
			title: msg.author.username + ", You fed your pet for 15¥!",
			description: "Your " + uPet + " gained " + r + " XP!"
		}});
	}
}});

client.on("message", msg => {
  if (msg.content.startsWith("s/rename")){
	 if((!pet[msg.author.id]) || (coins[msg.author.id] < 30)){
		 return;
	} else {
	let n = msg.content.split(" ").slice(1);
		coins[msg.author.id] = {
	    coins: coins[msg.author.id].coins - 30
	  };
	  let uPet = pet[msg.author.id].pet;
	  let uXp = pet[msg.author.id].exp;
          let uName = pet[msg.author.id].name;
	   pet[msg.author.id] = {
	    pet: uPet,
	    name: n,
	    exp: uXp
	  };
		msg.channel.send({ embed: {
			title: msg.author.username + ", You renamed your pet for 30¥!",
			description: "Your " + uPet + " is now named " + n + "!"
		}});
	}
}});
	
client.on("message", msg => {
  if (msg.content.startsWith("s/release")){
	 if(!pet[msg.author.id]){
		 return;
	} else{
	  let uPet = pet[msg.author.id].pet;
	  let uXp = pet[msg.author.id].exp;
          let uName = pet[msg.author.id].name;
		
		coins[msg.author.id] = {
	    coins: coins[msg.author.id].coins + 20
	  };
		
	   pet[msg.author.id] = {
	    pet: "none",
	    name: "unnamed",
	    exp: 0
	  };
		msg.channel.send({ embed: {
			title: msg.author.username + ", You released your pet back into its natural habitat!",
			description: "You have been rewarded +20¥ credits!"
		}});
	}
}});

client.on('message', msg => {
 if (msg.content.startsWith("s/blackjack")) {
  const filter = (reaction, user) => {
    return ['✅'].includes(reaction.emoji.name) && user.id === msg.author.id;
}
  msg.channel.send({embed:{
   title: "BLACKJACK",
   description: "React ✅ to join!\n`[max: 2][ends in 10s]`"
  }})
  .then(msg => {
  msg.react('✅');
  msg.awaitReactions(filter, { max: 1, time: 10000 })
    .then(collected => {
        const f = collected.first();
   if (f.emoji.name === '✅') {
    msg.channel.send("ok!");
   } else{
    return;
   }
   });
  })
  .then(msg => {
  msg.awaitReactions(filter, { max: 2, time: 10000 })
    .then(collected => {
        const l = collected.next();
   if (l.emoji.name === '✅') {
    msg.channel.send("ok2!");
   } else{
    return;
   }
  });
  });
 }});

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
 if (msg.content === "dv7") {
  msg.delete;
  msg.channel.send({ embed: {
   color: 15868795,
   image: {
   url: "https://cdn.discordapp.com/attachments/470359851227414532/543975252527677441/image0.png"
   }
   }});
 }});

client.on('message', msg => {
 if (msg.content.startsWith("dv8")) {
  msg.delete;
  const z = client.emojis.find(emoji => emoji.name === "div");
  let x = msg.content.split("-").slice(1);
  msg.channel.send({ embed: {
   color: 15868795,
   title: x[0],
   description: z +z +z +z +z +z +z +z +z +z + "\n" + x[1]
   }});
 }});

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
	
client.on("message", message => {
	
	if(!coins[message.author.id]){
	  coins[message.author.id] = {
	    coins: 0
	  }
	}
	
	let coinAmt = 1;
	let baseAmt = 1;
	console.log(coinAmt , baseAmt);
	
	if(coinAmt === baseAmt){
	  coins[message.author.id] = {
	    coins: coins[message.author.id].coins + coinAmt
	  };
	  fs.writeFile("./xp.json", JSON.stringify (coins), (err) => {
	    if (err) console.log(err);
	  });
	}
	});
	
	client.on("message", msg => {
	
	      let uCoins = coins[msg.author.id].coins;
	
	      if(msg.content === "s/credits") {
	          msg.channel.send({ embed: {
	            color: 15868795,
	            title: msg.author.username + ", you have:",
	            description: uCoins + "¥ credits"
	          }});
	      }
	  });

client.on("message", msg => {
	if (msg.content.startsWith("s/gift")){
		if(!msg.member.hasPermission("ADMINISTRATOR")) return;
		let u = msg.mentions.members.first();
		let amt = msg.content.split(" ").slice(2);
		if(!u) return;
		if(!amt) return;
		msg.channel.send({ embed: {
			color: 15868795,
			title: msg.author.username + " gifted " + u.user.username + " +" + amt + "¥ credits!"
		}});
		
		if(!coins[u.id]){
	  coins[u.id] = {
	    coins: 0
	  }
	}
		 coins[u.id] = {
	    coins: coins[u.id].coins + parseInt(amt)
	  };
		
	  fs.writeFile("./xp.json", JSON.stringify (coins), (err) => {
	    if (err) console.log(err);
	  });
		
	}});
	


client.login(process.env.BOT_TOKEN);
