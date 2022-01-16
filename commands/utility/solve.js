const discord = require('discord.js')
const fs = require('fs')
const math = require('mathjs');
  
module.exports = {
  name: "solve",
  category: "utility",
  description: "Change Your Prefix",

  run: async (client, message, args) => {
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const color = ServerJSON[message.guild.id].color
    let whatto = args.join(` `);
            if (!whatto) return send(`Please provide a math equation to solve.`);
                let result = math.evaluate(whatto).toString();
                const embed = new discord.MessageEmbed()
                    .setTitle("Math Result")
                    .setColor(`${color}`)
                    .setThumbnail(client.user.avatarURL())
                    .setTimestamp()
                    .addField(`Equation:`, `\`\`\`js\n${whatto}\`\`\``, true)
                    .addField(`Result:`, `\`\`\`js\n${result}\`\`\``, true);
                message.delete();
                message.channel.send(embed)
    


  }
}