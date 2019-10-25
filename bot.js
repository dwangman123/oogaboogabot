const Discord = require('discord.js');
const client = new Discord.Client();
var info = require('./member_info.js');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  var input=message.content.toLowerCase();

  if (message.author.bot) {return;}
  if (( input.includes(" i'm ")) || ((input.indexOf("i'm"))==0&&(input.charAt(input.indexOf("i'm")+2)==" "))){
    message.channel.send("Hi" + message.content.substring(input.indexOf(" ", input.indexOf("i'm"))) + ", I'm daddy");
  }
  if (( input.includes(" im ")) || ((input.indexOf("im"))==0&&(input.charAt(input.indexOf("im")+2)==" "))) {
    message.channel.send("Hi" + message.content.substring(input.indexOf(" ", input.indexOf("im"))) + ", I'm daddy");
  }
  if (input.includes("!info")) {
      var name = input.substring(input.indexOf("o") + 2);
      var desc=name+"1";
      console.log(desc);
      var curr=name+"2";
    message.channel.send("Description: "+info[desc]);
    message.channel.send("Currently... "+info[curr]);
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
  if (input=="dharmil is") {

  }
})
;
    
client.login(process.env.BOT_TOKEN);