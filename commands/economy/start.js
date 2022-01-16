const discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "start",
  category: "economy",
  description: "Puts You In The DataBase",
  usage: "e.start",
  run: async (client, message, args) => {
    
   
    
    var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
     
    
     if (UserJSON[message.author.id]) {
                let WarningEmbed = new discord.MessageEmbed();
                WarningEmbed.setTitle("**ERROR**");
                WarningEmbed.setDescription("You already started");
                WarningEmbed.setTimestamp();
                WarningEmbed.setColor("#00ffff");
                message.channel.send(WarningEmbed);
                return;
            }
    
    UserJSON[message.author.id] = {
       bal: 0,
       lastclaim: 0,
       lastwork: 0,
       workers: 0,
      score: 0,
      rank: 0,
      lastrob: 0,
      iconurl: " ",
      pfcolor:" ",
      cars:" ",
      outfit:" ",
      
     }
    
    
     fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

    console.log(UserJSON);

     const embed = new discord.MessageEmbed();
     embed.setTitle("**Horray!!**");
     embed.setDescription("You Have Joined The Economy!!");
     embed.setTimestamp();
     embed.setColor("#00ffff");
    embed.setFooter(message.author.username, message.author.displayAvatarURL())

     message.channel.send(embed);
     return;
  }
};
