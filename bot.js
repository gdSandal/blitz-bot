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
const embed = new Discord.RichEmbed()
  .setTitle("Blitz-Bot Info")
  .setAuthor("BlitzBot")

  .setColor(0x00AE86)
  .setDescription("Made: 3/17/18, Last updated: 3/18/18")
  .setFooter("Made by Sandal")

  .addField("sample text", "sample text", true)

  message.channel.send({embed});
  }
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
