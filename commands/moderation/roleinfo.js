const discord = require('discord.js')
const fs = require('fs')

  
module.exports = {
  name: "roleinfo",
  category: "moderation",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const roleName = args.join(" ");
    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() == roleName.toLowerCase());
    if (!role) return message.reply("That doesn't seem to be a role");
    const createrole = new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, "/").replace(/T/g, " ")
    let haveRole = message.guild.members.cache.filter(m => m.roles.cache.get(role.id)).size;
    const embed = new discord.MessageEmbed()
    .setColor(role.hexColor)
    .setTitle('Information about '+ role.name)
    .addField("Name", `\`\`\`${role.name}  \`\`\`` , true)
    .addField("Role ID", `\`\`\`${role.id}  \`\`\``, true)
    .addField("Role Colour (Hex)", `\`\`\`${role.hexColor}  \`\`\``, true)
    .addField("Position", `\`\`\`${role.position}  \`\`\``, true)
    .addField("Created at", `\`\`\`${createrole}  \`\`\``, true)
    .addField("**Members**", `There are` + `\` ${haveRole}\`` + ` members with this role.`, true)
    .addField("**Other**", `Hoisted: ${role.hoist}\nManaged by an integration: ${role.managed}\nMentionable: ${role.mentionable}`, true);
    message.channel.send(embed)
  

  }
}