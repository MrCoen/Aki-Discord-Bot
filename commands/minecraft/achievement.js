const snekfetch = require('snekfetch');

module.exports =  {
name:"achievement",
category:"minecraft",

    run: async (client, message, args) => {
  let [title, contents] = args.join(" ").split("|");
  if (!contents) [title, contents] = ["Achievement Unlocked!", title];
  let rnd = Math.floor((Math.random() * 39) + 1);

  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if (!args.join(" ")) return message.reply("**Please Insert An Achievement**")
  if (title.length > 24 || contents.length > 22) return message.channel.send("You have entered more then 22 characters.");
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url).then(r => message.channel.send({files:[{attachment: r.body}]}));
    }
}


