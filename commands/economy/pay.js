const discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "pay",
  description: "Give people money",
  category: "economy",
  usage: "e.pay <@user>",
  run: async (client, message, args) => {
       var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    
    let Money = args[1];

            /* ERROR CHECKS */
            if (!Money) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("Please specify an amount to give.");
              ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor("#00ffff");
                message.channel.send(ErrorEmbed);
                return;
            }

            if(!UserJSON[message.author.id]){
      var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
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
      const embed = new discord.MessageEmbed()
      
      .setTitle("Try Again")
      .addField(message.author.username, 'You have just been added to the system')
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
      .setColor(`${scolor}`)
      message.channel.send(embed)
     
    }
            if (isNaN(Money)) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("Please specify a number");
              ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor("#00ffff");
                message.channel.send(ErrorEmbed);
                return;
            }
            if (UserJSON[message.author.id].bal < Money) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("You do not have enough money");
              ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor("#00ffff");
                message.channel.send(ErrorEmbed);
                return;
            }
            if (Money.indexOf(".") != -1 || Money.indexOf("-") != -1 || Money == 0) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("Please specify an integer value greater than 0");
              ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor("#00ffff");
                message.channel.send(ErrorEmbed);
                return;
            }

            let Mentioned = message.mentions.members.first();
            if (!Mentioned) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("Please mention a user");
              ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor("#00ffff");
                message.channel.send(ErrorEmbed);
                return;
            }
            if (!UserJSON[Mentioned.id]) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription("That person does not play the game.");
              ErrorEmbed.setTimestamp();
                ErrorEmbed.setColor("#00ffff");
                message.channel.send(ErrorEmbed);
                return;
            }

            UserJSON[message.author.id].bal -= parseInt(Money);
            UserJSON[Mentioned.id].bal += parseInt(Money);

            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

            let SuccessEmbed = new discord.MessageEmbed();
            SuccessEmbed.setTitle("Payment Successful:");
            SuccessEmbed.setDescription("You have given " + Money + " discord$ to " + Mentioned.user.username);
            SuccessEmbed.setColor('#00ffff')
            SuccessEmbed.setTimestamp()
            SuccessEmbed.setFooter(message.author.username, message.author.displayAvatarURL())
            message.channel.send(SuccessEmbed)
        }
  
};
