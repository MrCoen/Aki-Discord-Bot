const got = require('got');
const Discord = require('discord.js')
const fs = require('fs')

module.exports =  {
name:"shortenurl",
category:"utility",
    run: async (client, message, args) => {
       var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
  
    if (args.length < 1) {
        throw 'Please provide a url to shorten!';
    }

    const url = args.join(' ');
    const color = ServerJSON[message.guild.id].color;
    message.delete();

    const res = await got(`http://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    const embed = new Discord.MessageEmbed()
    .addField("Old Link:", url)
    .addField("New Link:", res.body)
    .setColor(`${color}`)
    .setTimestamp()
    message.channel.send(embed)

    }
}