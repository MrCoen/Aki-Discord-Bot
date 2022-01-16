  
const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const types = ['top'];
const fs = require('fs')
 
module.exports = {
name:"urban",
category:"utility",
description: "searches for word definitions",
usage: "p.urban <word>",
    run: async (client, message, args) => {
       var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
   
      const color = ServerJSON[message.guild.id].color;
  const word = args.join(" ")
  try {
    const { body } = await snekfetch
      .get('http://api.urbandictionary.com/v0/define')
      .query({ term: word });
    if (!body.list.length) return message.channel.send('Could not find any results.');
    const data = body.list[types === 'top' ? 0 : Math.floor(Math.random() * body.list.length)];
    const embed = new Discord.MessageEmbed()
      .setColor(`${color}`)
      .setAuthor('Urban Dictionary', 'https://i.imgur.com/Fo0nRTe.png', 'https://www.urbandictionary.com/')
      .setURL(data.permalink)
      .setTitle(data.word)
      .setDescription((data.definition))
      .addField('Example', data.example);
    const filtercheck = [ "hell"]
    if (filtercheck.some(word2 => data.definition.toLowerCase().includes(word2))) return message.channel.send("Not allowed to search nsfw content.");
    if (filtercheck.some(word3 => data.word.toLowerCase().includes(word3))) return message.channel.send("Not allowed to search nsfw content.");
    message.channel.send(embed);
  } catch (err) {
    return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
}
}