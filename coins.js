const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const coins = require("./coins.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
  fs.writeFileSync("./coins.json", JSON.stringify (coins), (err) => {
    if (err) console.log(err);
  });
}
});

client.on("message", msg => {
  
      if(!coins[msg.author.id]){
          coins[msg.author.id] = {
              coins: 0
          }
        }
  
      let uCoins = coins[msg.author.id].coins;
  
      if(msg.content === "s/credits") {
          msg.channel.send({ embed: {
            color: 15868795,
            title: msg.author.username + ", you have:",
            description: uCoins + "¥ credits"
          }});
      }
  });
