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
 if (msg.content === 's/slottest') {
msg.channel.send('```_________\n|_______|/\n|💰🍒🍊|/\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```')
.then((msg)=>{
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|💰💰💰|/\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 1000);
});
}});
 

client.on('message', msg => {
 if (msg.content === 's/slots') {
msg.channel.send('```_________\n|_______|/\n|💰🍒🍊|/      Loading.\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```')
.then((msg)=>{
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|💰💰💰|/      Loading..\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 500);
setTimeout(function(){
msg.edit('```_________\n|_______|/\n|🍒🍊💰|/      Loading...\n| 𝕊𝕃𝕆𝕋𝕊 ||\n|_______|/```');
}, 1000);
});
}});
 
client.on('message', msg => {
 if (msg.content.startsWith('s/test')) {
 const filter = msg => msg.content.includes('hi', 'hello');
 msg.channel.send("Test Await | expires in 6 seconds...").then(r => r.delete(6000));
 msg.channel.awaitMessages(filter, {
  max: 1,
  time: 3000
 }).then(collected => {
  msg.channel.send("complete");
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
 if (msg.content.startsWith('s/stand ' + 'Star Platinum' || 'Magician’s Red' || 'Hermit Purple' || 'Hierophant Green','Silver Chariot','The Fool','Tower of Grey','Dark Blue Moon','Strength','Ebony Devil','Yellow Temperance','Hanged Man','Emperor','Empress','Wheel of Fortune','Justice','Lovers','TheSun','Death 13','Judgement','High Priestess','Geb','Khnum','Thoth','Anubis','Bast','Sethan','Osiris','Horus','Atum','Tenor Sax','Cream','The World','Crazy Diamond','The Hand','Echoes','Heaven’s Door','Aqua Necklace','Bad Company','Red Hot Chili Pepper','The Lock','Surface','Love Deluxe','Pearl Jam','Achtung Baby','Ratt','Harvest','Cinderella','Boy II Man','Earth, Wind and Fire','Highway Star','Super Fly','Eigma','Cheap Trick','Stray Cat','Atom Heart Father','Killer Queen')) {
 let args = msg.content.split(" ").slice(1)
 let wikilink = "http://jojo.wikia.com/wiki/List_of_Stands?file=" + args.join("") + "AvAnim.png";
 let googlelink = "https://www.google.com/search?q=" + args.join("+") + "&client=safari&hl=en";
  msg.channel.send({embed: {
   color: 15868795,
   title: "__| JJBA Stand Stats |__",
   thumbnail: {
    url: "http://i.imgur.com/Vqypytw.jpg"
   },
   fields: [{
    name: "**Stand name:**",
    value: args.join(" ")
   },
   {
    name: "**Wiki Page:**",
    value: "Click here: " + "http://jojo.wikia.com/wiki/" + args.join("_")
   },
   {
    name: "**Images:**",
    value: wikilink + " | " + googlelink
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
  if (msg.content.startsWith('s/clear')) {
  if (!msg.member.hasPermission("MANAGE MESSAGES")) return msg.reply("error");
   let args = msg.content.split(" ").slice(1);
      msg.channel.bulkDelete(args);
      msg.channel.send("Cleared " + args.join(" ") + " messages").then(msg => msg.delete(4000));
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
