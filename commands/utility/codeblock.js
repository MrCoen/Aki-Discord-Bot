const Discord = require('discord.js')
const fs = require('fs')



module.exports = {
	name: "codeblock",
	aliases: ["bc", "broadcast"],
	category: "utility",
	description: "Says Your Input Vis The Bot",
	usage: "<input>",
	run: async (client, message, args) => {
    var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    const color = UserJSON[message.author.id].pfcolor
		if (message.deletable) message.delete();

		const rolecolor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

      
      const content = args.slice(0).join(" ")

			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
        .setTitle(message.author.username + "'s Code:")
        .setDescription( `\`\`\`js\n ${content}  \`\`\``)
				.setTimestamp()
				.setFooter(client.user.username)

				message.channel.send(embed)

		
	}
}   