const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const fs = require('fs')

module.exports = {
    name: "user",
    aliases: ["who", "user", "info"],
    description: "Returns user information",
    category: "info",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
     const color = ServerJSON[message.guild.id].color

        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new Discord.MessageEmbed()
            .setFooter(member.displayName)
            .setColor(`${color}`)
            .setThumbnail(member.user.displayAvatarURL())
            

            .addField('Member information:', stripIndents`** Display name:**
             ${member.displayName}
            ** Joined at:**
             ${joined}
            ** Roles:**
             ${roles}`)

            .addField('User information:', stripIndents`** ID:**
             ${member.user.id}
            ** Username**:
             ${member.user.username}
            ** Tag**:
             ${member.user.tag}
            ** Created at**:
             ${created}`)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}