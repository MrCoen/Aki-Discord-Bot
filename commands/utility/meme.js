const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
const fs = require('fs')

module.exports = {
    name: "meme",
    category: "utility",
    description: "Sends An Epic Meme!",
    run: async (client, message, args) => {
       var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
   
        const subReddits = ["dankmeme", "meme"]
        const color = ServerJSON[message.guild.id].color;
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setImage(img)
        .setTimestamp()
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
} 