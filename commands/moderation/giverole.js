const discord = require('discord.js');
const fs = require('fs')

module.exports = {
  name: 'giverole',
  category:  'moderation',
  usage: 'e.giverole <member> (rolename)',
  description: 'Give a role to a user',
  
   run: async (client, message, args) => {
     var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

     
    const targetUser = message.mentions.users.first()
    const embed = new discord.MessageEmbed()
    .setTitle('__Server Update!__')
    .setColor(`${color}`)
    .setTimestamp()
    .setFooter(message.author.username)
    if (!targetUser) {
      message.channel.send(embed.setDescription(`\`Please Specify A User...!\``).setTitle('Something Went Wrong...'))
      return
    }

    args.shift()

    const roleName = args.join(' ')
    const { guild } = message
      if(!roleName){
            message.channel.send(embed.setDescription(`\`Please Name A Role...!\``).setTitle('Something Went Wrong....'))
          }
    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    
    if (!role) {
    
      message.channel.send(embed.setDescription(`\`The Role: ${roleName}, Doesnt Exist!\``).setTitle('Something Went Wrong....'))
      return
    }
    else{
    const member = guild.members.cache.get(targetUser.id)
    member.roles.add(role)
     
    
    message.channel.send(embed.setDescription(`${targetUser}` + `\`Has Successfully Been Given\`` + `${role}`))
    }
     
  }
}

