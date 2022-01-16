  
const Discord = require("discord.js");
const fs = require('fs')
module.exports =  {
name:"mchead",
category:"minecraft",
    run: async (client, message, args) => {
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('**Name A Minecraft Account**')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Head Of ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
        .setColor(`${color}`)
    message.channel.send(embed)
}
}