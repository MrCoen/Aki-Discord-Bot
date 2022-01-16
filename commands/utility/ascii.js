const discord = require('discord.js');
const fetch = require("node-fetch");

module.exports =  {
name:"ascii",
description:"Converts text to ascii",
category:"utility",
usage:"p.ascii <text>",
    run: async (client, message, args) => {
    let text = encodeURIComponent(args.join(' '));
    if (!text) return message.channel.send("You need to mention some text for the ascii convertor");
    const tooLong = "The Text Is Too Long To Convert";

    fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(res => res.text())
        .then(body => {
            if (body.length > 2000) return message.channel.send(tooLong);
            return message.channel.send(body, {
                code: "fix"
            });
        })
        .catch(error => {
            this.client.logger.error(error);
            return message.channel.send(texts.general.error.replace(/{{err}}/g, error.message));
        });
}
}
