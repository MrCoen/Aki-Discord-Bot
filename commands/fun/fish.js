const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
  name: "fish",
  category: "fun",
  run: async (client, message, args) => {
    const fishes = [
      ":fish:",
      ":tropical_fish:",
      ":blowfish:",
      ":boot:",
      "horse",
      "hotdog",
      "hamster"
    ];
    const fish = fishes[Math.floor(Math.random() * fishes.length)];
    message.channel.send(
      `:fishing_pole_and_fish: You went fishing and caught a ${fish}`
    );
  }
};
