const Discord = require('discord.js')
const fs = require('fs')
module.exports = {
    name: "clear",
    category: "moderation",
    description: "Clears the chat",
    usage:"p.clear (Amount)",
    run: async (client, message, args) => {
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Something Went Wrong....")
            .setDescription(`\`You do not have permissions!\``)
            .setColor(`${color}`)
            .setFooter(message.author.tag)
            .setTimestamp()

            message.channel.send(embed)
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Something Went Wrong...")
            .setDescription(`\`I Cannot Delete 0 Messages!\``)
            .setColor(`${color}`)
            .setFooter(message.author.tag )
            .setTimestamp()

            message.channel.send(embed)
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Something Went Wrong....")
            .setDescription(`\`I Dont Have Correct Permissions!\``)
            .setColor(`${color}`)
            .setFooter(message.author.tag )
            .setTimestamp()

            message.channel.send(embed)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => console.log(`Something went wrong... ${err}`));
    }
}