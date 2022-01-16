const discord = require('discord.js')
const fs = require('fs')

module.exports = {
  name: "profile",
  category: 'economy',
  description: 'Shows You Your Profile',

  run: async (client, message, args) => {

      var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
  const name = message.author.username;
  const user = message.mentions.members.first()


   
var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const prefix = ServerJSON[message.guild.id].prefix
    const scolor = ServerJSON[message.guild.id].color;

    if(UserJSON[message.author.id].iconurl === ' '){
      const balance = UserJSON[message.author.id].bal;
        const score = UserJSON[message.author.id].score;
        const rank = UserJSON[message.author.id].rank;
        const img = message.author.displayAvatarURL();
        const color = UserJSON[message.author.id].pfcolor;
        const car = UserJSON[message.author.id].cars
        const outfit = UserJSON[message.author.id].outfit
    const embed = new discord.MessageEmbed()
    .setTitle(name + "'s Profile!")
    .setDescription(`\`\`\`diff\n+ Level: ${rank}\n+ Score: ${score}\n+ Balance: $${balance}\n+ Car: ${car}\n+ Outfit: ${outfit}\n+ Profile Color: ${color}\`\`\``)
    .setTimestamp()
    .setFooter(name + 'Profile')
    .setColor(`${color}`)
    message.channel.send(embed)

    }else {

 const balance = UserJSON[message.author.id].bal;
        const score = UserJSON[message.author.id].score;
        const rank = UserJSON[message.author.id].rank;
        const img = UserJSON[message.author.id].iconurl;
        const color = UserJSON[message.author.id].pfcolor;
        const car = UserJSON[message.author.id].cars
        const outfit = UserJSON[message.author.id].outfit
    const embed = new discord.MessageEmbed()
    .setTitle(name + "'s Profile!")
    .setDescription(`\`\`\`diff\n+ Level: ${rank}\n+ Score: ${score}\n+ Balance: $${balance}\n+ Car: ${car}\n+ Outfit: ${outfit}\n+ Profile Color: ${color}\`\`\``)
    .setTimestamp()
    .setFooter(name + 'Profile')
    .setThumbnail(img)
    .setColor(`${color}`)
    message.channel.send(embed)

    
    
  }
  }
}

