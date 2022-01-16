const Discord = require('discord.js')
const fs = require('fs')
module.exports = {
	name: "say",
	aliases: ["bc", "broadcast"],
	category: "moderation",
	description: "Says Your Input Vis The Bot",
	usage: "<input>",
	run: async (client, message, args) => {
    var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    const color = UserJSON[message.author.id].pfcolor
		if (message.deletable) message.delete();

		if (args.length < 1)
			return message.reply('Nothing To Say?').then(m => m.delete (5000));

		const rolecolor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

    const content = args.slice(0).join(" ")
    console.log(args[0])
      if(args[0] === 'link'){
        if(args[2].includes('discord')){
          message.author.send('You cannot send Invite links')
        }else{

        const name = args[1]
        const link = args.slice(2)
        const embed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setTitle(name)
        .setDescription(`[${name}](${link})`)
        .setTimestamp()
        .setFooter(message.author.username)

        message.channel.send(embed)
        }

      }else{

			const embed = new Discord.MessageEmbed()
				.setColor(`${color}`)
        .setTitle(message.author.username + " Says:")
.setDescription(`\`\`\`diff\n+ ${content}  \`\`\``)
				.setTimestamp()
				.setFooter(client.user.username)

				message.channel.send(embed)
      }
		
	}
}