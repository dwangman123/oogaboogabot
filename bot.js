const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  var input=message.content.toLowerCase();
  if (message.author.bot) {return;}
  if (input.includes("i'm")){
    message.channel.send("Hi" + message.content.substring(input.indexOf(" ", input.indexOf("m"))) + ", I'm daddy");
  }
  if (input.includes("im")){
    if ((input.charAt(input.indexOf("im")-1)!=" ")||(input.charAt(input.indexOf("im")+2)!=" ")){
      message.channel.send("hi i have gotten");
      return;
    }
      message.channel.send("Hi" + message.content.substring(input.indexOf(" ", input.indexOf("m"))) + ", I'm daddy");
  }

  if (input=="bradley is") {
    message.channel.send("gay!");
  }
  if (input=="frank is") {
  	message.channel.send("trying to understand your English!");
  }
  if (input=="brendan is") {
  	message.channel.send("a cool, smart, funny, handsome, witty, mature, awesome guy");
    message.channel.send("...");
    message.channel.send("sike");
  }
  if (input=="charlie is") {
    message.channel.send("dominating the world with his forehead");
  }
})
;
    
client.login(process.env.BOT_TOKEN);