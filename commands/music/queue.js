const { MessageEmbed } = require("discord.js");
const fs = require('fs')

module.exports = {

    name: "queue",
    description: "To show the server songs queue",
    usage: "",
    aliases: ["q", "list", "songlist", "song-list"],


  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
const prefix = ServerJSON[message.guild.id].prefix 
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing in this server.", message.channel);

    let queue = new MessageEmbed()
    .setAuthor("Server Songs Queue", "https://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif")
    .setColor(`${color}`)
    .addField("Now Playing", serverQueue.songs[0].title, true)
    .addField("Text Channel", serverQueue.textChannel, true)
    .addField("Voice Channel", serverQueue.voiceChannel, true)
    .setDescription(serverQueue.songs.map((song) => {
      if(song === serverQueue.songs[0])return
      return `**-** ${song.title}`
    }).join("\n"))
    .setFooter("Currently Server Volume is "+serverQueue.volume)
    if(serverQueue.songs.length === 1)queue.setDescription(`No songs to play next add songs by \`\`${prefix}play <song_name>\`\``)
    message.channel.send(queue)
  },
};