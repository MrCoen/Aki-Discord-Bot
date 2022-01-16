const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "botsettings",
  category: "utility",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
const prefix = ServerJSON[message.guild.id].prefix 
    const embed = new discord.MessageEmbed()
    .setTitle('***Bots Settings***')
    .addField('Prefix:', prefix, true)
    .addField('Color:', color, true)
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(`${color}`)
    .setThumbnail('https://media.giphy.com/media/H1SyhP6BO40tO6jp1C/giphy.gif')

    message.channel.send(embed)
  

  }
}