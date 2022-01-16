const discord = require('discord.js')
const fs = require('fs')

module.exports = {
  name: "shop",
  category: "economy",
  description: "Change Your Profile color",

  run: async (client, message, args) => {
    
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const prefix = ServerJSON[message.guild.id].prefix
    const color = ServerJSON[message.guild.id].color;
 


    const embed = new discord.MessageEmbed()
    .setTitle(`\`${prefix}buy <product>\``)
    .setAuthor('Shop')
    .addField('Cars:', `\`\`\`diff\n+ Hurican - $1,750,000 \n+ Phantom - $363,600 \n+ Ferrari - $239,999.99 \n+ Mondeo - $24,000 \n+ Corsa - $16,000 \n+ Astra - $10,000\`\`\``,true)
    .addField('Outfits:', `\`\`\`diff\n- Versace - $11,000 \n- Gucci - $10,000 \n- Nike - $600 \n- Adidas - $300 \n- Puma - $200 \n- Slazenger - $100\`\`\``,true )
    .setColor(`${color}`)

    message.channel.send(embed);


  

  }
}