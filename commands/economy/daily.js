const discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "daily",
  description: "Gives You Your Daily Payment",
  category: "economy",
  usage: "e.daily",
  run: async (client, message, args) => {
       var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    
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
            if (Math.floor(new Date().getTime() - UserJSON[message.author.id].lastclaim) / (1000 * 60 * 60 * 24) < 1) {
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
                let WarningEmbed = new discord.MessageEmbed()
                WarningEmbed.setTitle("**ERROR**");
                WarningEmbed.setDescription("You have claimed today already");
                WarningEmbed.setColor(`${scolor}`)
                WarningEmbed.setTimestamp()
                WarningEmbed.setFooter(message.author.username, message.author.displayAvatarURL())
                message.channel.send(WarningEmbed);
                return;
            }
            
           if(UserJSON[message.author.id].rank === 0){
             var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 50;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $50 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 1){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 100;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $100 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 2){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 125;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $125 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 3){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 150;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $150 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 4){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 175;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $175 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 5){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 250;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $250 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 6){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 300;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $300 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 7){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 450;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $450 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 8){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 500;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $500 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 9){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 600;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $600 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
            if(UserJSON[message.author.id].rank === 10){
              var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      const scolor = ServerJSON[message.guild.id].color;
            UserJSON[message.author.id].bal += 1000;
            UserJSON[message.author.id].lastclaim = new Date().getTime();
            fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));
            const embed = new discord.MessageEmbed()
            .setTitle('Daily Reward!')
            .setDescription(`\`\`\`diff\n+ You Have Collected $1000 For The Day\`\`\``)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.author.username)
            .setColor(`${scolor}`)
            message.channel.send(embed)

            }
  }
};
