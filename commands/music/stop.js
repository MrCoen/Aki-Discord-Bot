
const { MessageEmbed } = require("discord.js");


module.exports = {

    name: "stop",
    description: "To stop the music and clearing the queue",
    usage: "",
    aliases: [],
    category:"music",


  run: async (client, message, args) => {
    const channel = message.member.voice.channel
    if (!channel)return message.channel.send("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send("There is nothing playing that I could stop for you.", message.channel);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop the music");
    message.react("✅")
  },
};