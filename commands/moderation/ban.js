const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.cache.find(c => c.name === "bot-logs") || message.channel;
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
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`You have not got permissions!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`I do not have that permission enabled!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toBan) {
            const noMem = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`That member could not be found!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            const noSelf = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`You cannot Kick Yourself!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noSelf)
        }

        // Check if the user's banable
        if (!toBan.bannable) {
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
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName)
            .setTimestamp()
            .setDescription(stripIndents`**> baned member:** ${toBan} (${toBan.id})
            **> baned by:** ${message.member} (${message.member.id})
            **> Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new Discord.MessageEmbed()
            .setColor(`${color}`)
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to ban ${toBan}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {

                message.reply(`ban canceled.`)
            }
        });
    }
};