const Discord = require('discord.js')
const fs = require('fs')
module.exports = {
    name: "id",
    category: "info",
    description: "Sends Users Avatar",
    usage: "p.avatar || p.avatar<command name>",

    run: async (client, message, args) => {
       var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color

      const channelid = message.channel.id
      const userid = message.author.id
      const serverid = message.guild.id
      const botid = client.user.id
      const messageid = message.id
      const embed = new Discord.MessageEmbed()
      .setTitle("Here Are All ID's")
      .addField('**User ID:**', `\`\`\`xl\n${userid} \`\`\``,true)
      .addField('**Channel ID:**', `\`\`\`xl\n${channelid} \`\`\``)
      .addField('**Server ID:**', `\`\`\`xl\n${serverid} \`\`\``)
      .addField('**My ID:**', `\`\`\`xl\n${botid} \`\`\``,true)
      .addField('**Message ID:**', `\`\`\`xl\n${messageid} \`\`\``,true)
      .setTimestamp()
      .setFooter(message.author.username)
      .setColor(`${color}`)
      

      message.channel.send(embed)

    }
    }