const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "laugh",
  category: "emotes",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

    message.delete()
    const embed = new discord.MessageEmbed()

    .setImage('https://media.giphy.com/media/CoDp6NnSmItoY/giphy.gif' +'?size=4096')
    .setColor(`${color}`)


    message.channel.send(embed)
  

  }
}