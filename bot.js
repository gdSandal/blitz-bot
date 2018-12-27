const Discord = require('discord.js');
const client = new Discord.Client();

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


    if(command === 'say') {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send({embed: {
        color: 15868795,
        description: (sayMessage);
    }});
});

client.login(process.env.BOT_TOKEN);
