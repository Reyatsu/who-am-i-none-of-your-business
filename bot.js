const Discord = require("discord.js");
const Client = new Discord.Client();
const Prefix = '#'
Client.on("ready", ()=>{
	console.log("Bot1 is online");
})

Client.on('message', (message)=>{
	if(message.content.startsWith(Prefix + 'Вкл'))
	{
		message.channel.send("Я родился!");
	}
	if(message.content.startsWith('Please Enter Security Bump'))
	{
		message.channel.send("Work");
	}
	if(message.content.startsWith('Next bump point will be available in'))
	{
		//message.channel.send("Work");
	}

})

Client.login(process.env.BOT_TOKEN);
