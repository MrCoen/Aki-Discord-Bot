const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/web/index.html');
});

app.listen(port, () => console.log(`${port}`));

const { Client, RichEmbed, Collection, Util } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');
const client = new Client({ disableEveryone: true });
const search = require('youtube-search');
const Discord = require('discord.js');
const { join } = require('path');

client.queue = new Map();
client.categories = fs.readdirSync('./commands/');
client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
	require(`./handler/${handler}`)(client);
});

client.on('ready', Client => {
	var ServerJSON = JSON.parse(fs.readFileSync('./DB/mod.json'));

	console.log(client.user.username + ` is Now Online`);
 
	client.user.setActivity('Human Species', { type: 'WATCHING', status: 'dnd' });
});

client.on('guildCreate', async (guild, member) => {
	var ServerJSON = JSON.parse(fs.readFileSync('./DB/mod.json'));
	ServerJSON[guild.id] = {
		prefix: '/',
		color: 'fffff0',
		welcomeCh: ' '
	};
	var UserJSON = JSON.parse(fs.readFileSync('././DB/users.json'));

	fs.writeFileSync('././DB/users.json', JSON.stringify(UserJSON));
	fs.writeFileSync('./DB/mod.json', JSON.stringify(ServerJSON));
});

client.on('message', async message => {
	var ServerJSON = JSON.parse(fs.readFileSync('./DB/mod.json'));

	let prefix = ServerJSON[message.guild.id].prefix;

	var UserJSON = JSON.parse(fs.readFileSync('./DB/users.json'));
	if (!UserJSON[message.author.id]) {
		if (message.author.bot) return;
		else {
			UserJSON[message.member.id] = {
				bal: 0,
				lastclaim: 0,
				lastwork: 0,
				workers: 0,
				score: 0,
				rank: 0,
				lastrob: 0,
				iconurl: ' ',
				pfcolor: ' ',
				cars: ' ',
				outfit: ' ',
				note: ' '
			};

			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
		}
	}

	if (UserJSON[message.author.id]) {
		return;
	}

	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.member)
		message.member = await message.guild.fetchMember(message);

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (cmd.length === 0) return;

	let command = client.commands.cache.get(cmd);
	if (!command) throw error;

	if (command) command.run(client, message, args);
});

client.on('guildMemberAdd', async (message, member) => {
	const logChannel = message.guild.channels.cache.find(
		c => c.name.toLowerCase === 'welcome'
	);
	const embed = new Discord.MessageEmbed()
		.setTitle('Huge Welcome To ' + member.user.username)
		.setDescription(
			'We are happy you could join our server ' + member.user.username
		)
		.setFooter(member.user.username, member.user.displayAvatarURL())
		.setThumbnail(member.user.displayAvatarURL())
		.setTimestamp();

	message.logChannel.send(embed);
});

client.on('message', async (message, member) => {
	var UserJSON = JSON.parse(fs.readFileSync('./DB/users.json'));
	const name = message.author.username;

	if (!UserJSON[message.author.id]) {
		return;
	}

	if (UserJSON[message.author.id]) {
		const balance = UserJSON[message.author.id].bal;
		const score = UserJSON[message.author.id].score;
		const rank = UserJSON[message.author.id].rank;
		const yourchannel = message.guild.channels.cache.find(
			channel => channel.name === 'welcome'
		);

		UserJSON[message.author.id].score += 12;
		fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
		JSON.parse(fs.readFileSync('./DB/users.json'));

		//rank 2
		if (UserJSON[message.author.id].score === 144) {
			UserJSON[message.author.id].rank += 1;

			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));

			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 1 \n ${name} You Have Leveled ***UP***\n You Now earn $100 daily  \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}

    
		//rank 3
		if (UserJSON[message.author.id].score === 432) {
			UserJSON[message.author.id].rank += 1;

			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));

			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 2 \n ${name} You Have Leveled ***UP*** \n You Now earn $125 daily  \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		//rank 4
		if (UserJSON[message.author.id].score === 864) {
			UserJSON[message.author.id].rank += 1;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 3 \n ${name} You Have Leveled ***UP***\n You Now earn $150 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		//rank 5
		if (UserJSON[message.author.id].score === 1728) {
			UserJSON[message.author.id].rank += 1;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 4 \n ${name} You Have Leveled ***UP***\n You Now earn $175 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		//rank 6
		if (UserJSON[message.author.id].score === 3456) {
			UserJSON[message.author.id].rank += 1;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 5 \n ${name} You Have Leveled ***UP***\n You Now earn $200 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		if (UserJSON[message.author.id].score === 6912) {
			UserJSON[message.author.id].rank += 1;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 6 \n ${name} You Have Leveled ***UP***\n You Now earn $225 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		if (UserJSON[message.author.id].score === 13824) {
			UserJSON[message.author.id].rank += 1;
			UserJSON[message.author.id].bal += 300;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 7 \n ${name} You Have Leveled ***UP***\n You Now earn $250 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		if (UserJSON[message.author.id].score === 27648) {
			UserJSON[message.author.id].rank += 1;
			UserJSON[message.author.id].bal += 300;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 8 \n ${name} You Have Leveled ***UP***\n You Now earn $275 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		if (UserJSON[message.author.id].score === 55296) {
			UserJSON[message.author.id].rank += 1;
			UserJSON[message.author.id].bal += 300;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 9 \n ${name} You Have Leveled ***UP***\n You Now earn $350 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
		if (UserJSON[message.author.id].score === 110592) {
			UserJSON[message.author.id].rank += 1;
			UserJSON[message.author.id].bal += 700;
			fs.writeFileSync('./DB/users.json', JSON.stringify(UserJSON));
			const embed = new Discord.MessageEmbed()
				.setTitle('Congrats!')
				.setDescription(
					`Level: 10 \n ${name} You Have Leveled ***UP***\n You Now earn $700 daily   \n Score: ${score} \n Balance: ${balance}`
				)
				.setTimestamp()
				.setFooter(name + ' Leveled Up')
				.setThumbnail(message.author.displayAvatarURL())
				.setColor('#00ffff');
			message.channel.send(embed);
		}
	}
});

client.login(token);




