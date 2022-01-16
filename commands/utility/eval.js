function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const discord = require('discord.js')
module.exports =  {
name:"eval",
category:"utility",
description:"does what eval does best",
usage:"p.eval <string>",
    run: async (client, message, args) => {
      if(message.author.id ===  '745237085505454200'){
    args = args.join(" ");
    try {
        var evaled = eval(args);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
            const input = message.content
            const embed = new discord.MessageEmbed()
            .setTitle('__Calculated...__')
            .setDescription('Input:\n' + `\`\`\`diff\n- ${input} \n \`\`\`` + 'Output:' + `\`\`\`xl\n${clean(evaled)}\n\`\`\``)
            
        message.channel.send(embed);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
if(!message.author.id ===  '745237085505454200'){
      message.channel.send('Only the bot owner may use this command!')
     }
  }
  
}