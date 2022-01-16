const discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "warn",
  description: "Warns a member",
  category: "moderation",
  usage: "e.start",
  run: async (client, message, args) => {
    
    var UserJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const guild = message;
         var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

      const user = message.mentions.users.first();
      const id = user.id;
    
     if (!message.member.hasPermission("KICK_MEMBERS")) {
            const noMem = new discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong...")
            .setDescription(`\`Invalid Permissions!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }

        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            const noMem = new discord.MessageEmbed()
            .setColor(`${color}`)
            .setTitle("Something Went Wrong....")
            .setDescription(`\`I Do Not Have Kick Permissions!\``)
            .setFooter(message.author.username)
            .setTimestamp()
            return message.channel.send(noMem)

        }
      
    
            UserJSON[user.id].warn += 1; 
    
            fs.writeFileSync("././DB/mod.json", JSON.stringify(UserJSON));
            console.log(UserJSON);
            console.log(id);
    
          if(UserJSON[user.id].warn === 1){
            const embed = new discord.MessageEmbed()
          .setTitle('**Warning**')
          .setDescription(user.username + " You Have Been Warned")
             .setColor(`${color}`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL())
            message.channel.send(embed)
          }
         if(UserJSON[user.id].warn === 2){
            const embed = new discord.MessageEmbed()
          .setTitle('**Warning**')
          .setDescription(user.username + " This Is Your second Warning Dont do it again could result in a possible ban!!")
             .setColor(`${color}`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL())
                        message.channel.send(embed)

          }
         if(UserJSON[user.id].warn === 3){
            const embed = new discord.MessageEmbed()
          .setTitle('**Warning**')
          .setDescription(user.username + " You Have Been Warned 3 Times, This is your final warning!")
            .setColor(`${color}`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL())
                      message.channel.send(embed)

            }
    
    
  }
};
