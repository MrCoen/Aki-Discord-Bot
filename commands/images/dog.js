const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const fs = require('fs')
module.exports = {
  name: "dog",
  category: "images",
  description: "Sends An Dog!",
  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
    const subReddits = ["dog"];

    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new Discord.MessageEmbed()
      .setColor(`${color}`)

      .setImage(img)
      .setTitle("Dog For You:")
      .setTimestamp()
      .setFooter(`Requested By ${message.author.tag}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  }
};
