const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
    if (msg.content === 'ping') {
    const m = await message.channel.send('Ping?');
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    }});

client.login(process.env.BOT_TOKEN);
