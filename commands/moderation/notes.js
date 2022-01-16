const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "notes",
  category: "moderation",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
   var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
   var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const color = ServerJSON[message.guild.id].color
 if(!message.member.hasPermission('KICK_MEMBERS')){
   const embed = new discord.MessageEmbed()
   .setTitle('Something Went Worng....')
   .setDescription('Sorry but you do not appear to have Permissions')
   .setTimestamp()
   .setFooter(message.author.username)
   .setThumbnail(message.author.displayAvatarURL())
      .setColor(`${color}`)

   message.channel.send(embed)
 }else{

const notted = message.mentions.members.first() || message.guild.members.get(args[0]);  
   const notes = UserJSON[notted.id].note
   fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
   const embed = new discord.MessageEmbed()
   .setTitle('Notes For ' + notted.user.username)
   .addField('**Notes:**', `\`\`\`${notes}\`\`\``)
   .setFooter(message.author.username)
   .setTimestamp()
   .setThumbnail(notted.user.displayAvatarURL({dynamic:true}))
      .setColor(`${color}`)

   message.channel.send(embed)

  }
  }
}