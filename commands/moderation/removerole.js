const discord = require('discord.js');
const fs = require('fs')
module.exports = {
  name: 'removerole',
  category:  'moderation',
  usage: 'e.removerole <member> (rolename)',
  description: 'Remove a role from a user',
  
   run: async (client, message, args) => {
     var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

     const embed = new discord.MessageEmbed()
     .setTitle('Something Went Wrong....')
     .setTimestamp()
     .setColor(`${color}`)
     .setFooter(message.author.username)
     
     const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.channel.send(embed.setDescription(`\`Please Name A Member To Remove Role From\``))
      return
    }

    args.shift()

    const roleName = args.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.channel.send(embed.setDescription(`\`There Is No Role With The Name ${roleName}\``))
      return
    }

    const member = guild.members.cache.get(targetUser.id)

    if (member.roles.cache.get(role.id)) {
      member.roles.remove(role)
      message.channel.send(embed.setDescription(`${targetUser}` `\`No Long Has The\`` `${role}` `\`role\``).setTitle('Update'))
    } else {
      message.channel.send(embed.setDescription(`${targetUser}` `\`No Long Has The\`` `${role}` `\`role\``).setTitle('Update'))
    }
     
  }
}

