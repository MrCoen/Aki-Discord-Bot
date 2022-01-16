
const Discord = require("discord.js");
const fs = require('fs')


module.exports = {
    name:"botinfo",
    category: "info",
    description: "Sends bot Info",
    run: async (client, message, args) =>{
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color

            function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }

        const ping = Math.round(client.ws.ping);
        const memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)

        let botembed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setTitle("__Bot Information:__")
        .setDescription(`\`Hello, Im ${client.user.username}, and im here to make your server run smoother.\``)
        .setThumbnail('https://media.giphy.com/media/H1SyhP6BO40tO6jp1C/giphy.gif')
        .addField("Bot name:", `\`${client.user.username}\``, true)
        .addField("Users: ", `\`${client.users.cache.size}\``, true)
        .addField("Servers: ", `\`${client.guilds.cache.size}\``, true)
        .addField("Channels: ", `\`${client.channels.cache.size}\``, true)
        .addField("Ping:", `\`${ping}ms\``, true)
        .addField("Library:", `\`Discord.js v12.2.0\``, true)
        .addField("Developer:", "[Effortless#7382](https://discord.gg/rNqSdrt)",true)
        .addField("Version:",`\`3.6.2\``, true)
        .addField(`Memory usage:`, `\`${memory}\`` + `\`MB\``, true)
        .addField("Uptime: ", `\`${duration(client.uptime)}\``)
        .addField("Invite me to your server!", '[Click Here](https://discord.com/oauth2/authorize?client_id=776158661009604616&scope=bot&permissions=805314622)')
        .addField("Latest update:", `\`Overall Re-design and color update\``)
        .setFooter(client.user.username)
        .setTimestamp()
    
        message.channel.send(botembed);
    }
}