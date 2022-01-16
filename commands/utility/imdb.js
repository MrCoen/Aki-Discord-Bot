
const discord = require("discord.js");
const imdb = require("imdb-api");
const fs = require('fs')

module.exports = {
name: "movieinfo",
  description: "Get the information about series and movie",
  category: "utility",
  usage: "imdb <name>",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of movie or series")
    }
    
    const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    
    const color = ServerJSON[message.guild.id].color

    let movie = await imob.get({'name': args.join(" ")})
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor(`${color}`)
    .setThumbnail(movie.poster)
    .setDescription( `\`\`\` ${movie.plot}  \`\`\``)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country", movie.country, true)
    .addField("Languages", movie.languages, true)
    .addField("Type", movie.type, true);
    
    
    message.channel.send(embed)
    
    
    
  }

}