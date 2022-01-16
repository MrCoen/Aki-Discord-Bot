const { MessageEmbed } = require("discord.js");
const fs = require('fs')

module.exports = {
    name: "resume",
    description: "To resume the paused music",
    usage: "",
    aliases: [],
    category:"music",


  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setColor(`${color}`)
      .setThumbnail('https://media.giphy.com/media/coBIzlrDq93doYaA9U/giphy.gif')
      return message.channel.send(xd);
    }
    return message.channel.send("There is nothing playing in this server.", message.channel);
  },
};