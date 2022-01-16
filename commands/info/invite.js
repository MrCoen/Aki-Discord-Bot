const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "invite",
  category: "info",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
    
    const embed = new discord.MessageEmbed()
    .setTitle('Invite Me Human')
    .setDescription('[**Invite Me Here, Over Here**](https://discord.com/oauth2/authorize?client_id=776158661009604616&scope=bot&permissions=805314622)')
    .addField('**I Would Appriciate An invite into your server, Human.**', '**You know you want to....**')
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setColor(`${color}`)
    message.channel.send(embed)

  }
}