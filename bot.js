const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'b!ping') {
    msg.reply({embed: {
  color: 3447003,
  description: "pong"
}});

client.on('message', msg => {
  if (msg.content === 'b!info') {
    msg.reply({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
        name: "Made for Geometry Blitz",
        value: "[Invite Here](https://discord.gg/XSKx36y)."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Blitz-Bot"
    }
  }
});

client.on('message', msg => {
  if (msg.content === 'b!embed') {
    msg.reply({embed: {
  color: 3447003,
  description: "this is an embed!"
}});

  }
});

client.login(process.env.BOT_TOKEN);
