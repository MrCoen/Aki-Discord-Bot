const { MessageEmbed } = require("discord.js");
const fs = require('fs')

module.exports = {
    name: "pause",
    description: "To pause the current music in the server",
    usage: "",
    aliases: [""],
        category:"music",


  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      let xd = new MessageEmbed()
      .setColor(`${color}`)
      .setThumbnail('https://media.giphy.com/media/f7M8UNkEdAmwFvNnJZ/giphy.gif')
      return message.channel.send(xd);
    }
    return message.channel.send("There is nothing playing in this server.", message.channel);
  },
};