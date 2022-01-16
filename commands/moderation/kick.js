const Discord = require("discord.js")
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
const fs = require('fs')

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kicks the member",
    usage: "p.kick <user> <reason> || p.kick <id> <reason>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.cache.find(c => c.name === "logs") || message.channel;
var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color


        // No args
        if (!args[0]) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`No user Mentioned!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        // No reason
        if (!args[1]) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`No Reason Mentioned!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        // No author permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`You have not got permissions!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`I do not have that permission enabled!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toKick) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`That member could not be found!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        // Can't kick urself
        if (toKick.id === message.author.id) {
            const noSelf = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`You cannot Kick Yourself!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noSelf)

        }

        // Check if the user's kickable
        if (!toKick.kickable) {
            const noSelf = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`Unable To Kick Admins!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noSelf)

        }
                
        const embed = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName)
            .setTimestamp()
            .setDescription(stripIndents`** Kicked member:** ${toKick} (${toKick.id})
            ** Kicked by:** ${message.member} (${message.member.id})
            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new Discord.MessageEmbed()
            .setColor("#00ffff")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to kick ${toKick}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reaction collector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // The verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Kicking Failed, Here's the reason: ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                message.channel.send(`Kick Successfully Cancelled.`)

            }
        });
    }
};