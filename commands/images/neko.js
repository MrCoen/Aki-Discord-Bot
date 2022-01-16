const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "neko",
   category: "images",
  description: "Get Fresh Neko Images :D",
run: async (client, message, args) => {
    if(message.channel.nsfw){
    let data = await random.getNeko()
    message.channel.send(data)
    }else{
      message.channel.send('You need to be in a NSFW channel.')
    }
  
}
}