const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "note",
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
   .setThumbnail(message.author.displayAvatarURL())

   message.channel.send(embed)
 }

const notted = message.mentions.members.first() || message.guild.members.get(args[0]);  
   const note = args.slice(1).join(" ")
    
   UserJSON[notted.id].note += note + ', '
   fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
   const embed = new discord.MessageEmbed()
   .setTitle('Note Added To ' + notted.user.username)
   .addField('Member Noted:', notted)
   .addField('Noted By:', message.author.username + ` - [${message.author.id}]`)
   .addField('Note: ', note)
   .setTimestamp()
      .setColor(`${color}`)
   .setThumbnail(message.author.displayAvatarURL())

   message.channel.send(embed)

  }
}