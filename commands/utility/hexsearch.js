const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");
const fs = require('fs')
  


module.exports = {
name: "colorsearch",
category: "utility",
description: "shows colors in different formats",
usage:"p.colorsearch <color>",
    run: async (client, message, args) => {
       var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
   
     const color = ServerJSON[message.guild.id].color;

    if(!args[0] || args[0] === 'help') return message.reply("Please provide a valid hex code without the #")
    var isOk = /^[0-9A-F]{6}$/i.test(args[0])
    if (isOk === false) return message.reply("Please provide a valid hex code without the #")
    
    const { body } = await superagent
    .get(`https://api.alexflipnote.dev/color/` + args[0]);

    const embed = new Discord.MessageEmbed()
    .setColor(`${color}`)
    .setTitle(body.name)
    .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
    .setImage(body.image) 
    message.channel.send({embed});
}
};
