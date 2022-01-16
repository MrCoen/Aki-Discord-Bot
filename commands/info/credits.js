const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs')
module.exports = {
    name: "credits",
    category: "info",
    run: async(client, message, args) => {
var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color

      const embed = new Discord.MessageEmbed()
      .setColor(`${color}`)
      .setTitle('Credits:')
      .addField("__Developer:__ ", `\`Effortless#7382\``,true)
      .addField("__Logo Design:__", `\`Effortless#7382\``, true)
      .addField("__Bot Help:__", `\`BloodRed17#3886: \`` + " [Click Me](https://github.com/bloodred17/bloodred17.github.io)\n" +  `\`ZoneInfinity#7763:\`` +  " [Click Me](https://discord.com/oauth2/authorize?client_id=752052866809593906&permissions=540375616&scope=bot)")
      .setTimestamp()
      .setFooter(client.user.username)
      .setThumbnail(client.user.avatarURL())
      message.channel.send({embed}) 
 }
}