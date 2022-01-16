const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = {
  name: "ass",
  category: "nsfw",
  description: "Sends A Cat!",
  run: async (client, message, args) => {
         if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send('Not in a NSFW channel.');

        } else {

            const id = [Math.floor(Math.random() * 4923)];
            const res = await snekfetch.get(`http://api.obutts.ru/butts/${id}`);
            const preview = res.body[0]["PREVIEW".toLowerCase()];
            const image = `http://media.obutts.ru/${preview}`;

            const embed = new Discord.MessageEmbed()
                .setImage(image)
            return message.channel.send({ embed });
        }
    

    }
};
