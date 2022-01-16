
const Discord = require("discord.js");
const moment = require('moment')
const fs = require('fs')

module.exports = {
    name:"serverinfo",
    category: "info",
    description: "Sends Server Info",
    run: async (client, message, args) =>{
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
        let level = '';
        let content = '';
        const created = moment.utc(message.guild.createdAt).format('ddd, MMM Do YYYY')
        const joined = moment.utc(message.member.joinedAt).format('ddd, MMM Do YYYY')
        const owner = message.guild.owner
        let serverembed = new Discord.MessageEmbed()
        .setTitle("__Server Information:__")
        .setColor(`${color}`)
        .addField("Server Name", `\`${message.guild.name}\``,true)
        .addField("Server Owner", `\`${owner}\``,true)
        .addField('Verified', `\`${message.guild.verified ? 'Yes' : 'No'}\``, true)
        .addField("Member Count:", `\`${message.guild.memberCount} Members\``, true)
        .addField("Role Count:", `\`${message.guild.roles.cache.size} Roles\``, true)
        .addField('Channel Count', `\`${message.guild.channels.cache.size} Channels\``, true)
 
        .addField("Created On", `\`${created}\``,true)
        .addField("You Joined", `\`${joined}\``, true)
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.guild.name)
        .setTimestamp()

        message.channel.send(serverembed);
    }
}
