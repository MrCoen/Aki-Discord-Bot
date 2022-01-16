const weather = require('weather-js');
const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name:"weather", 
    category:"utility",
    description:"Tell Weather Report In A Specific Location",
    run: async(client, message, args) => {
      var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
      

        const color = ServerJSON[message.guild.id].color;
        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
            if (err)client.channel.send(err);

           
            if (result === undefined || result.length === 0) {
                client.channel.send('**Please enter a valid location.**') 
                return;
            }

            
            var current = result[0].current;
            var location = result[0].location;

            
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl) 
                .setColor(`${color}`) 
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
                .setTimestamp()

                
                message.channel.send(embed);
        });
    }
}