const Discord = require('discord.js')
const fs = require('fs')
module.exports = {
    name: "avatar",
    category: "info",
    description: "Sends Users Avatar",
    usage: "p.avatar || p.avatar<command name>",

    run: async (client, message, args) => {
       var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color

        const username = message.mentions.members.first() || message.member;
        const useravatar = message.mentions.users.first() || message.author;
        const display = username.displayName
      const embed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setTitle(`__${display}:__`)
        .setDescription(`\`Formats:\n\`` + '[jpg](https://cdn.discordapp.com/avatars/'+useravatar.id+'/'+useravatar.avatar+'.jpg?size=4096) - [png](https://cdn.discordapp.com/avatars/'+useravatar.id+'/'+useravatar.avatar+'.png?size=4096) - [webp](https://cdn.discordapp.com/avatars/'+useravatar.id+'/'+useravatar.avatar+'.webp?size=4096)')
        .setImage(useravatar.displayAvatarURL({dynamic:true})+'?size=4096')
      message.channel.send(embed)
    }
    }