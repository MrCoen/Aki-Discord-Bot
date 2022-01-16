const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
  name: "coinflip",
  category: "fun",
  run: async (client, message, args) => {
    var coinflip = ["**HEADS!**", "**TAILS!**"];
    const embed = new Discord.MessageEmbed()
      .setDescription(coinflip[Math.floor(Math.random() * coinflip.length)])
      .setColor("#00ffff")
      .setTimestamp()
      .setTitle("Outcome: ");

    message.channel.send(embed);
  }
};
