const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const fs = require('fs')
module.exports = {
  name: "searchimage",
  category: "images",
  description: "Sends A Cat!",
  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
    const content = args.slice(0).join("")
    const subReddits = [`${content}`];

    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new Discord.MessageEmbed()
      .setColor(`${color}`)
      .setTitle(`Content:`)
      .setImage(img)
      .setTimestamp()
      

    message.channel.send(embed);
  }
};
