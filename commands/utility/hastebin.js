const Discord = require('discord.js')
const fs = require('fs')
const hastebin = require("hastebin-gen");


module.exports = {
	name: "hastebin",
	aliases: ["bc", "broadcast"],
	category: "utility",
	description: "Says Your Input Vis The Bot",
	usage: "<input>",
	run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color
		 const extension = args[0];
    const code = args.slice(1).join(" ");

    if (!args.length) {
      return message.channel.send(
        "Please write your text or code to generate hastebin link"
      );
    }

      message.delete()
      const haste = await hastebin(`${code}`, { extension: `${extension}` });
      const embed = new Discord.MessageEmbed()
      .setTitle('Haste Bin Created')
      .setDescription(haste)
      .addField('Code:', `\`\`\`js\n ${code}  \`\`\``)
      .setColor(`${color}`)
      .setTimestamp()
      message.channel.send(embed);
    
  
		
  }
}   