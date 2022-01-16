const Discord = require('discord.js')
const { stripIndents } = require('common-tags')
const fs = require('fs')
module.exports = {
	name: "report",
	category: "moderation",
	description: "Report a user to admins",
 	usage: "<mention | id>",
 	run: async (client, message, args) => {
var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

 		let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

 		if (!rMember)
 			return message.reply(`\`Couldn't Find That Member\``)

 		if(rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
 			return message.reply(`\`You Cannot Report Admins\``)

 		if(!args[1])
 			return message.channel.send(`\`Please Provide A Reason For Reporting This Member!\``)

 		const channel = message.guild.channels.cache.find(channel => channel.name.includes('bot-logs'))

 		if(!channel){
       const embed = new Discord.MessageEmbed()
 			.setColor(`${color}`)
 			.setTimestamp()
 			.setFooter(message.guild.name)
 			.setAuthor("Reported member", rMember.user.displayAvatarURL())
 			.setDescription(stripIndents`**Member:**
 				${rMember} (${rMember.id})
 				**Reported by:**
 				${message.member} (${message.member.id})
 				**Reported in:**
 				${message.channel}
 				**Reason:**
 				${args.slice(1).join(" ")}`)
 			return message.channel.send(embed) || message.channel.send(embed)
     }
 			

 		const embed = new Discord.MessageEmbed()
 			.setColor(`${color}`)
 			.setTimestamp()
 			.setFooter(message.guild.name)
 			.setAuthor("Reported member", rMember.user.displayAvatarURL())
 			.setDescription(stripIndents`**Member:**
 				${rMember} (${rMember.id})
 				**Reported by:**
 				${message.member} (${message.member.id})
 				**Reported in:**
 				${message.channel}
 				**Reason:**
 				${args.slice(1).join(" ")}`)
 			return channel.send(embed) || message.channel.send(embed)
 	}
}