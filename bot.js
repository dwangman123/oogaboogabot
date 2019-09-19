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
    message.channel.send("Hi" + message.content.substring(message.content.toLowerCase().indexOf(" ", message.content.toLowerCase().indexOf("m"))) + ", I'm daddy")
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 