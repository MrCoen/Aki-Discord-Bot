const discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "work",
  description: "Gives You Your work Payment",
  category: "economy",
  usage: "e.work",
  run: async (client, message, args) => {
       var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    
     
            if(UserJSON[message.author.id]){
            let deltaTime = Math.floor((new Date().getTime() - UserJSON[message.author.id].lastwork) / (1000 * 60));
            if (deltaTime < 30) {
                let ErrorEmbed = new discord.MessageEmbed();
                ErrorEmbed.setTitle("**ERROR**");
                ErrorEmbed.setDescription(`You can work in ${30 - deltaTime} minutes.`);
                ErrorEmbed.setTimestamp()
                ErrorEmbed.setColor('RED')
                ErrorEmbed.setFooter(message.author.username, message.author.displayAvatarURL())
                message.channel.send(ErrorEmbed);
                return;
            }
    
            
    
    
            UserJSON[message.author.id].bal += 50;
            UserJSON[message.author.id].lastwork = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

            let SuccessEmbed = new discord.MessageEmbed();
            SuccessEmbed.setTitle("Work Completed:");
            SuccessEmbed.setDescription(`You have earned 50`);
            SuccessEmbed.setTimestamp();
            SuccessEmbed.setFooter(message.author.username, message.author.displayAvatarURL())
            SuccessEmbed.setColor("#00ffff");
            message.channel.send(SuccessEmbed);
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
  }
  
}
