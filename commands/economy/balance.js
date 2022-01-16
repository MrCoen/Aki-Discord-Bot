const discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "bal",
  description: "Shows Your Balance",
  category: "economy",
  usage: "e.bal",
  run: async (client, message, args) => {
       var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const prefix = ServerJSON[message.guild.id].prefix
    const color = ServerJSON[message.guild.id].color;
    const bal = UserJSON[message.author.id].bal;
    
       if (!UserJSON[message.author.id]) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("You must be in the economy.");
                ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor(`${color}`);
                message.channel.send(ErrorEmbed);
                return;
            }
            
            if(UserJSON[message.author.id]){
                let SuccessEmbed = new discord.MessageEmbed();
                SuccessEmbed.setTitle(`${message.author.username}'s Balance:`);
                SuccessEmbed.setDescription(`\`\`\`xl\n $${bal}\`\`\``);
                SuccessEmbed.setTimestamp();
                SuccessEmbed.setFooter(message.author.username)
                SuccessEmbed.setColor(`${color}`);
                message.channel.send(SuccessEmbed);
                return;
            }
        
  }
};
