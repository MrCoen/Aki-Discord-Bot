const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "setprefix",
  category: "utility",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const prefix = args[0]
    const color = ServerJSON[message.guild.id].color;
    
    console.log(ServerJSON[message.guild.id].prefix)
    if (!message.member.hasPermission("KICK_MEMBERS")) {
            const noMem = new discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("ALERT!")
            .setDescription("You Cannot Use This command!")
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }
        ServerJSON[message.guild.id].prefix = prefix;
    
   
    fs.writeFileSync("././DB/mod.json", JSON.stringify(ServerJSON));


    const embed = new discord.MessageEmbed()
    .setTitle('Prefix Changed to')
    .addField('New Prefix', prefix)
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(`${color}`)

    message.channel.send(embed)
  

  }
}