const Discord = require('discord.js');
const client = new Discord.Client();

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


    if(command === 'say') {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }}

client.on('message', msg => {
  if (msg.content === 's/embed') {
    msg.delete()
    msg.channel.send({embed: {
  color: 15868795,
  description: "text"
    
}});
}
});

client.login(process.env.BOT_TOKEN);
