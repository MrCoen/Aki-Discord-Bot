const discord = require('discord.js')
const fs = require('fs')
 var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
   
  module.exports = {
    name:"suggest",
    category:"utility",
    description:"This Allows Members Of you server to suggest cirtain things to you and your mods",
    usage:"p.suggest <Suggestion>",
    
    run: async (client, message, args) => {
      const color = ServerJSON[message.guild.id].color;
      
      const embed = new discord.MessageEmbed()
      .setTitle('Are you sure that you would like to suggest this?')
      .setTimestamp()
      message.channel.send(embed)
      message.react("👍")
      message.react("❌")
      
      if(message.reaction === "👍"){
        const suggest = message.content;
      const embed = new discord.MessageEmbed()
      .setTitle("Suggestion!")
      .setTimestamp()
      .addField("Suggestion:", suggest)
      .addField("Suggested By:", message.author.username)
      .setColor(`${color}`)
      
      message.channel.send(embed)
      
      }else if (message.reaction === "❌"){
        message.channel.send('Succesfully Cancelled Suggestion')
      }
      
    }
  }