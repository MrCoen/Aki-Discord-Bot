const discord = require('discord.js')
const fs = require('fs')

module.exports = {
  name: "buy",
  category: "economy",
  description: "Change Your Profile color",

  run: async (client, message, args) => {
    var UserJSON = JSON.parse(fs.readFileSync("././DB/users.json"));
    var ServerJSON = JSON.parse(fs.readFileSync("././DB/mod.json"));
    const prefix = ServerJSON[message.guild.id].prefix
    const color = ServerJSON[message.guild.id].color;
    const item = args[0];
    const person = UserJSON[message.author.id]

   
    if(!UserJSON[message.author.id]){
      message.channel.send('***You Are Not Part Of The Community*** \n Use -> start command')
    }
    
    if(item.toLowerCase() === 'hurican'){
      if(person.bal > 1750000){
        person.cars = "Hurican"
        person.bal -= 1750000
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Lambourghini: \`\`\``)
        .setThumbnail('https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/lambo-535.jpg?itok=ufifoKAe')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 1750000){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }

      if(item.toLowerCase() === 'phantom'){
      if(person.bal > 363600){
        person.cars = "Phantom"
        person.bal -= 363600
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Rolls Royce: \`\`\``)
        .setThumbnail('https://cdn.motor1.com/images/mgl/oLnRb/s1/2018-rolls-royce-phantom-first-drive.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 363600){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'ferrari'){
      if(person.bal > 239999){
        person.cars = "Ferrari"
        person.bal -= 239999
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Ferrari: \`\`\``)
        .setThumbnail('https://www.pushstart.it/en/test-drive/ferrari-488-spider/images/laterale-p_hu9c00df9c4f0d43a7ab04e6e114eddd6c_171193_640x400_fill_q75_box_center.JPG')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 239999){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'mondeo'){
      if(person.bal > 23999){
        person.cars = "Ford Mondeo"
        person.bal -= 23999
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Ford Mondeo: \`\`\``)
        .setThumbnail('https://www.pushstart.it/en/test-drive/ferrari-488-spider/images/laterale-p_hu9c00df9c4f0d43a7ab04e6e114eddd6c_171193_640x400_fill_q75_box_center.JPG')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 23999){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'corsa'){
      if(person.bal > 16000){
        person.cars = "Vauxhall Corsa"
        person.bal -= 16000
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Vauxhall Corsa: \`\`\``)
        .setThumbnail('https://m.atcdn.co.uk/a/media/w1024h768/e2bec88c26854cf489258fc2624fc3fc.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 16000){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'astra'){
      if(person.bal > 16000){
        person.cars = "Vauxhall Astra"
        person.bal -= 16000
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Vauxhall Astra: \`\`\``)
        .setThumbnail('https://cdn.motor1.com/images/mgl/VoweR/s1/vauxhall-astra-2019.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 16000){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'versace'){
      if(person.bal > 11000){
        person.outfit = "Versace"
        person.bal -= 11000
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Versace Outfit: \`\`\``)
        .setThumbnail('https://2.bp.blogspot.com/-doN1nqZucQc/WbvZlajc6II/AAAAAAAAC-U/C9Mot7SmEegEGmj-0B-t9EertZybKNzeQCLcBGAs/s1600/21690730_173390159878100_3138098845297147904_n.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 11000){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    
    if(item.toLowerCase() === 'gucci'){
      if(person.bal > 10000){
        person.outfit = "Gucci"
        person.bal -= 10000
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Gucci Outfit: \`\`\``)
        .setThumbnail('https://www.esquireme.com/public/images/2018/05/22/inline-gettyimages-960694012-1526918111.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 10000){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'nike'){
      if(person.bal > 600){
        person.outfit = "Nike"
        person.bal -= 600
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Nike Outfit: \`\`\``)
        .setThumbnail('https://www.footasylum.com/images/products/large/4025569.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 600){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'adidas'){
      if(person.bal > 300){
        person.outfit = "Adidas"
        person.bal -= 300
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Adidas Outfit: \`\`\``)
        .setThumbnail('https://thumblr.uniid.it/product/195322/1d13dd5899ef.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 300){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'puma'){
      if(person.bal > 200){
        person.outfit = "Puma"
        person.bal -= 200
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Puma Outfit: \`\`\``)
        .setThumbnail('https://www.footasylum.com/images/products/medium/4035462.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 200){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }
    if(item.toLowerCase() === 'slazenger'){
      if(person.bal > 100){
        person.outfit = "Slazenger"
        person.bal -= 100
        fs.writeFileSync("././DB/users.json", JSON.stringify(UserJSON));

        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Complete')
        .setDescription(`\`\`\`diff\n+ ${message.author.username}, You Now Own A Slazenger Outfit: \`\`\``)
        .setThumbnail('https://images.sportsdirect.com/images/products/63874722_l.jpg')
        .setTimestamp()
        message.channel.send(embed)

      }else if(person.bal < 100){
        
        const embed = new discord.MessageEmbed()
        .setTitle('Purchase Failed')
        .setDescription(`\`\`\`diff\n- ${message.author.username}, You Have Insufficient Funds! \`\`\``)
        .setThumbnail('https://media.discordapp.net/attachments/768356701333487647/775021004782043186/38-380082_red-cross-mark-clipart-printable-cancel-clipart-png-removebg-preview.png')
        .setTimestamp()
        message.channel.send(embed)
      }
    }

    
    
    
      


    

  }
}