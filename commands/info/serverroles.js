const Discord = require("discord.js");
const fs = require('fs')
module.exports = {
 name:"serverroles",
 description:"Displays all server roles",
 category:"info",
 usage:"/serverroles",   
    run: async (client, message, args) => {
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color

    const role = message.guild.roles.cache
    .map(r => r).join(",  ") || 'none';

    const rolenum = message.guild.roles.cache.size;

  const embed = new Discord.MessageEmbed()
  .setTitle("__***Server Roles:***__")
    .addField('Role Count: ' + `\`${rolenum}\``, `${role}`)
    .setColor(`${color}`)
    .setTimestamp()
    .setFooter(message.guild.name)
    .setThumbnail(message.guild.iconURL())
  message.channel.send({embed}) 
}
}