const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs')
module.exports = {
    name: "help",
    category: "info",
    run: async(client, message, args) => {
var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color
     const prefix = ServerJSON[message.guild.id].prefix

      const embed = new Discord.MessageEmbed()
      .setTitle('Help On The Way...')
      .setDescription('**First Thanks For Inviting Me!**')
      .addField('Commands List:', `\`\`\` ${prefix}commands \`\`\``, true)
      .addField('Want Your Bot Settings?', `\`\`\` ${prefix}botsettings \`\`\``,true)
      .addField('**Latest Update Includes:**', `\`\`\`-New Rank System \n-New Design \n-New Economy Commands \n-Overall Re-design \`\`\``)
      .setTimestamp()
      .setFooter(message.author.username)
      .setThumbnail('https://media.giphy.com/media/H1SyhP6BO40tO6jp1C/giphy.gif')
      .setColor(`${color}`)

      message.channel.send(embed)
 }
}