const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = {
  name: "tits",
  category: "nsfw",
  description: "Sends A Cat!",
  run: async (client, message, args) => {
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send('Not in NSFW channel.');

        } else {

            const id = [Math.floor(Math.random() * 10930)];
            const res = await snekfetch.get(`http://api.oboobs.ru/boobs/${id}`);
            const preview = res.body[0]["PREVIEW".toLowerCase()];
            const image = `http://media.oboobs.ru/${preview}`;

            const embed = new Discord.MessageEmbed()
                .setImage(image)
                
            return message.channel.send({ embed });
        }
    }
};
