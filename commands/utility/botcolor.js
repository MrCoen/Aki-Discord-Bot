const discord = require('discord.js')
const fs = require('fs')

module.exports = {
  name: "setcolor",
  category: "utility",
  description: "Change Your Bots main color",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const color = args[0]  
    const col = ServerJSON[message.guild.id].color
    if (!message.member.hasPermission("KICK_MEMBERS")) {
            const noMem = new discord.MessageEmbed()
            .setColor(`${col}`)
            .setTitle("ALERT!")
            .setDescription("You Cannot Use This command!")
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }
    
    ServerJSON[message.guild.id].color = color;
    
   
    fs.writeFileSync("././DB/mod.json", JSON.stringify(ServerJSON));
  
    console.log(ServerJSON[message.guild.id].color)

    const embed = new discord.MessageEmbed()
    .setTitle('Server Update')
    .addField('New Color', color)
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(`${color}`)

    message.channel.send(embed)

  

  }
}