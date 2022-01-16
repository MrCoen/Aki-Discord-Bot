const discord = require('discord.js')
const fs = require('fs')

module.exports = {
  name: "setpfcolor",
  category: "economy",
  description: "Change Your Profile color",

  run: async (client, message, args) => {
    var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));

    const color = args[0]

    UserJSON[message.author.id].pfcolor = color;

    fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));


    const embed = new discord.MessageEmbed()
    .setTitle('Profile Update')
    .setDescription(`New Color : ${color}`)
    .setTimestamp()
    .setColor(`${color}`)

    message.channel.send(embed);

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