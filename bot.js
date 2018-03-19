const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'b!ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'b!info') {
    msg.reply({embed: {
    color: 3447003,
    title: "BlitzBot v0.1.2"
    fields: [{
        name: "Created by Sandal",
        value: "Made 3/17/18. Previous Update 3/18/18."
      },
      {
        name: "Geometry Blitz",
        value: "Invite [here](https://discord.gg/XSKx36y)."
      }
    ],

});

client.on('message', msg => {
  if (msg.content === 'b!embed') {
    msg.reply({embed: {
  color: 3447003,
  description: "This is an embed!"
}});

  }
});

client.login(process.env.BOT_TOKEN);
