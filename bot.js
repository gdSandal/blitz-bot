const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 's/ping') {
    msg.channel.send('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 's/info') {
    msg.channel.send('`v0.2.0`');
  }
});

  client.on('message', msg => {
    if (msg.content === 's/say') {
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
