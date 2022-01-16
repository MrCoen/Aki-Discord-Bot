const Discord = require('discord.js')
const fs = require('fs')
module.exports = {
	name: "ping",
	category: "info",
	description: "Returns A Ping",
	run: async (client, message, args) => {
		const msg = await message.channel.send('Pinging...')
	  var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

		const embed = new Discord.MessageEmbed()
		.setColor(`${color}`)
		.setTitle("__Bot Ping:__")
		.addField("📡Ping: ", `\`${Math.floor(msg.createdAt - message.createdAt)}ms\``)
		.addField("📶API Latency: ", `\`${Math.round(client.ws.ping)}ms\``)
		.setTimestamp()
    .setFooter('🔪' + message.author.username + '🔪')
    .setThumbnail(client.user.avatarURL())


		 message.channel.send({ embed: embed })


	
		
	}
}