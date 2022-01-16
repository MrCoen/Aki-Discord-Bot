const Discord = require('discord.js')
const { stripIndents } = require("common-tags");
const fs = require('fs')

module.exports = {
    name: "commands",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {


        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {

            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
  var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
  const px1 = ServerJSON[message.guild.id].prefix
  const color = ServerJSON[message.guild.id].color
    const embed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setTitle("Commands List:")
  .setTimestamp()
        .setFooter(`Use ` + px1 + `help (command Name) For More`)
        .setThumbnail(client.user.avatarURL())

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`[${cmd.name}]\``)

    }


    const info = client.categories
        .map(cat => stripIndents`__**${cat[0].toUpperCase() + cat.slice(1)} :\n**__ - ${commands(cat)}`)
        .reduce((string,  category) =>  string  + "\n" + category );
         

    return message.channel.send(embed.setDescription(info).addField('__***Help Options:***__', `If you would like specific details on each command do:\n ` + `\`${px1}(Help) <Command Name>\``));
}

function getCMD(client, message, input) {
    const embed = new Discord.MessageEmbed()


    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `No information found for command **${input.toLowerCase()}**`;


    if (!cmd) {
        return message.channel.send(embed.setDescription(info));
    }


    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(" - ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Requested By:` + `\`[${message.author.tag}]\``);
    }

    return message.channel.send(embed.setColor("#ffffff").setDescription(info));
}