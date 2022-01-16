const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "clearnotes",
  category: "moderation",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
   var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
   var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const color = ServerJSON[message.guild.id].color
 if(!message.member.hasPermission('KICK_MEMBERS')){
   const embed = new disord.MessageEmbed()
   .setTitle('Something Went Worng....')
   .setDescription('Sorry but you do not appear to have Permissions')
   .setTimestamp()
   .setFooter(message.author.username)
   .setColor(`${color}`)
   

   message.channel.send(embed)
 }

const notted = message.mentions.members.first() || message.guild.members.get(args[0]);  

    
   UserJSON[notted.id].note = ' '
   fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
   const embed = new discord.MessageEmbed()
   .setTitle('Success...')
   .addField(message.author.username, `\`\`\`All notes for ${notted.user.username} were successfuly cleared!\`\`\``)
   .setTimestamp()
      .setColor(`${color}`)
   

   message.channel.send(embed)

  }
}