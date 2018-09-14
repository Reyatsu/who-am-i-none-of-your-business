const Discord = require("discord.js");
const Client = new Discord.Client();
var r1 = /\d+/g;
var r2 = /\+|\-/;
timerId = 0;
Client.on("ready", ()=>{
	console.log("Bot2 is online");
	channel = Client.channels.get('352924339068338177');
	channel.send('!bump');
})
Client.on('message', (message)=>{
	if(message.content.startsWith('Please Enter Security Bump') && message.author.bot)
	{
		var strСalcu = String(message.content);
		var s1 = strСalcu.match(r1);
		var s2 = strСalcu.match(r2);
		if (s2[0] === "+")
		{
			var summ = Number(s1[0]) + Number(s1[1]);
		}
		else
		{
			var summ = Number(s1[0]) - Number(s1[1]);
		}
		message.channel.send('!'+summ);
		clearTimeout(timerId);
		timerId = setTimeout(function() {
		  channel.send('!bump');
		}, 14410000);
	}
	if(message.content.startsWith('Next bump point will be available in') && message.author.bot)
	{
		var strСalcu = String(message.content);
		var s1 = strСalcu.match(r1);
		var timeS1 = (Number(s1[0])*3600000) + (Number(s1[1])*60000) + (Number(s1[2])*1000);
		clearTimeout(timerId);
		clearTimeout(timerId);
		timerId = setTimeout(function() {
		  channel.send('!bump');
		}, timeS1+10000);
	}
})

Client.login(process.env.BOT_TOKEN);
