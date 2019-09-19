const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.author.bot) {return;}
  if (message.content.toLowerCase()=="bradley is") {
    message.channel.send("gay!");
  }if ((message.content.toLowerCase().includes("i'm"))||(message.content.toLowerCase().includes("im"))){
    message.channel.send("Hi" + message.content.substring(message.content.toLowerCase().indexOf(" ", message.content.toLowerCase().indexOf("m"))) + ", I'm daddy");
  }
  if (message.content.toLowerCase()=="frank is") {
  	message.channel.send("a Chinese immigrant by the name of Junchu \"Dark15Soul\" Yan who is currently trying to understand your English!");
  }
  if (message.content.toLowerCase()=="brendan is") {
  	message.channel.send("a cool,smart,funny,handsome,witty,mature,awesome guy");
  	setTimeout(function(){
  		message,channel.send("sike");
  	},4000);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 