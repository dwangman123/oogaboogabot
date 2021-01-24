const Discord = require('discord.js');
const client = new Discord.Client();
var info = require('./member_info.js');
var prevM = false;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {
  var input=message.content.toLowerCase();

  //Dad bot
  if (message.author.bot) {return;}
  if (( input.includes(" i'm ")) || ((input.indexOf("i'm"))==0&&(input.charAt(input.indexOf("i'm")+2)==" "))){
    message.channel.send("Hi" + message.content.substring(input.indexOf(" ", input.indexOf("i'm"))) + ", I'm daddy");
  }
  if (( input.includes(" im ")) || ((input.indexOf("im"))==0&&(input.charAt(input.indexOf("im")+2)==" "))) {
    message.channel.send("Hi" + message.content.substring(input.indexOf(" ", input.indexOf("im"))) + ", I'm daddy");
  }

  //get info of members
  if (input.includes("!getinfo")) {
      var name = input.substring(input.indexOf("o") + 2);
      var desc=name+"1";
      var curr=name+"2";
    message.channel.send("Description: "+info[desc]);
    message.channel.send("Currently ... "+info[curr]);
  }

  //bradley :D
  if (input=="bradley is") {
    message.channel.send("gay");
  }

  //poop machine
  if (input=="!poop"){
    message.channel.send("░░░░░░░░░░░█▀▀░░█░░░░░░\n░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░\n░░░░░░█░█░░░░░░░░░░▐░░░\n░░░░░░▐▐░░░░░░░░░▄░▐░░░\n░░░░░░█░░░░░░░░▄▀▀░▐░░░\n░░░░▄▀░░░░░░░░▐░▄▄▀░░░░\n░░▄▀░░░▐░░░░░█▄▀░▐░░░░░\n░░█░░░▐░░░░░░░░▄░▌░░░░░\n░░░█▄░░▀▄░░░░▄▀█░▌░░░░░\n░░░▌▐▀▀▀░▀▀▀▀░░█░▌░░░░░\n░░▐▌▐▄░░▀▄░░░░░█░█▄▄░░░\n░░░▀▀░▄███▄▄░░░▀▄▄▄▀░░░\n░░░░░░░░░░░░░░░░░░░░░░░");
  }

  //Peepee size machine
  if (input.includes("!peepee")){
    if(!message.mentions.users.size){
      return message.channel.send("Please mention someone on the server");
    }
    message.channel.send("peepee size machine");
    var user=message.mentions.members.first();
    message.channel.send(user.displayName+"'s peepee:");
    let size=Math.floor(Math.random() * 6) + 1;
    var shaft="";
    for (var i=0;i<size;i++) {
      shaft=shaft+"=";
    }
    message.channel.send("8"+shaft+"D");
  }

  //gay machine
  if (input.includes("!howgay")){
    if(!message.mentions.users.size){
      return message.channel.send("Please mention someone on the server");
    }
    var user = message.mentions.members.first();
    message.channel.send("gay r8 machine");
    if (user.discriminator==("8860")){
      return message.channel.send(user.displayName+" is 200% gay");
    }
    var rating=Math.floor(Math.random()*100)+1;
    message.channel.send(user.displayName+" is "+rating+"% gay");
  }

  //coin flip
  if(input.includes("!coinflip")) {
    if (prevM){
      prevM = false;
      message.channel.send("heads");
      return;
    }
    var chance=Math.floor(Math.random()*2)+1;
    if (chance==1){
      message.channel.send("heads");
    }
    else{
      message.channel.send("tails");
    }
  }

  //dice roll
  if (input.includes("!diceroll")) {
    var chance=Math.floor(Math.random()*6)+1;
    message.channel.send(chance);
  }

  //fake coin flip
  if (input.includes("!flipcoin")){
    message.channel.send("heads");
  }
  if (input =="!coinfli"){
    prevM = true;
  }
})
;
    
client.login(process.env.BOT_TOKEN);