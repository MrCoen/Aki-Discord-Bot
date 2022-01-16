const Discord = require("discord.js");
module.exports = {
  name: "dicksize",
  category: "fun",
  description: "tells members there dicksize",
  run: async (client, message, args) => {
    let size = ["1cm", "12cm", "1km", "1mm", "None You Got A Vagina", "-200mm"];
    const random = size[Math.floor(Math.random() * size.length)];

    const embed = new Discord.MessageEmbed()
      .setTitle("Your Dicksize Is:")
      .setDescription(random)
      .setTimestamp()
      .setColor("#00ffff");

    message.channel.send(embed);
  }
};
