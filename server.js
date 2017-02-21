// Proof of Concept Translate Bot For Discord!
// Automatically translates between languages, you can stop it from translating your original language bu typing
// +speaks (language code) (ie. +speaks en) 
// it will automatically translate all messages in tbauto channel
// It can translate in all channels with +tb:(language code to translate into):(message)(ie. +tb:es:Hello World)
// This bot was pieced together from example code and function references with my fairly poor coding skillz.
// Licence is MIT, I'm not responible for anything it does / breaks!
// NightSkythePegasi


// load discordie object
var discordie = require("discordie");
var translator = require("yandex-translate-api")("<Yandex API Key>");
// change what channel auto translates
var tbauto = "tbauto"; 
// create the discord client obj
var client = new discordie();
var users = {};

// be sure to authorize the bot to your server/guild
// https://discordapp.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot

client.connect({
    token: "<Discord Token>"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
    //console.log(e);
var privateMsg = e.message.isPrivate; // undefined if a message on a channel

// e.message.content => returns the string that was sent to the server.
// e.message.channel returns the location of the sent message, either the
// text channel or the DirectMessageChannel.

// if privateMsg is true, you can encase the following code to
// reply in a private message to the user who pm'ed the
// bot.
if (e.message.author.username != "TranslateBot") {
      if (e.message.content.startsWith("+tb")) {
        e.message.channel.sendMessage("This Bot is Powered by Yandex.Translate - http://translate.yandex.com/")
        
        
        e.message.channel.sendMessage(e.message.author.username + " Said:");
        var mess = e.message.content.split(':', 3);
    
        //translate the message
        translator.translate(mess[2], { to: mess[1]}, function(err, res) { 
           //console.log(res.text);
        
        //spit it back out in channel
           e.message.channel.sendMessage(res.text);
        });
      };
    

    

    //use +user en
    //Support for auto translate room
       if (e.message.channel.name == tbauto) {
           e.message.channel.sendMessage("This Bot is Powered by Yandex.Translate - http://translate.yandex.com/")
           if (e.message.content.startsWith("+speaks")) {
              var update = e.message.content.split(" ", 2);
                users[e.message.author.username] = update[1]; 
              } 
           else {
           
           
          e.message.channel.sendMessage(e.message.author.username + " Said:");
          var mess = e.message.content;
         //translate the message
        
          var langs = ['en','es','ru'];
          for (var a in langs) {
             if (langs[a] != users[e.message.author.username]){
                translator.translate(mess, { to: langs[a]}, function(err, res) { 
                   //console.log(res.text);
                   //spit it back out in channel
                   e.message.channel.sendMessage(res.lang + " | " + res.text);
                });
             };
           };               
        };
     };
   };
});
