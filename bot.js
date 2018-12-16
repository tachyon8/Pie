'use strict';

var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');

}).listen(process.env.PORT || 8080);

var Discord = require('./discord.js');

var bot = new Discord.Client({
  token: "Mzc4MDEyMTUyMzAyMTQxNDUw.DO6PGQ.em2REkbW2ObQeie6z0H4IxjBAHU",
  autorun: true
});

var timeTillOffline=480;
var points=timeTillOffline;// starting points at 1minute per points its 8hours

bot.on('disconnect', function(errMsg, code) {
  console.log(`Connection Loss Code:${code} Reason: ${errMsg}`);
  setTimeout(bot.connect,10000)
})

bot.on('ready', function() {
  console.log('Logged in as %s = %s\n', bot.username, bot.id);
});

// var jsonfile = require('jsonfile')
// var currentlyMarried={}
// var marragesFile='./marrages.json'
// jsonfile.readFile(marragesFile, function(err, obj) { //No point reading it everytime new request so why not jsut read out and cache it
//   if (err){
//     console.log("Failed to read marrages"+err);
//   }else{
//     currentlyMarried=obj
//   }
// })

var marryPeople={}

bot.on('messageReactionAdd',(event)=>{
  // console.log(JSON.stringify(event))
    if (marryPeople[event.d.channel_id]){
      // console.log("Match CH")  //Confirmed reaction is in a channel with a pending marrage request
        if(marryPeople[event.d.channel_id][event.d.user_id] && event.d.emoji.name=="✅"){
          // console.log("Accept")
          // file.writeFile(marragesFile, currentlyMarried, function(err) {
          //   if (err) {
          //     console.log("Failed to Write marrages" + err);
          //   }
          // })
          // User has now accepted should look at now saving to file as has married

            bot.sendMessage({to:event.d.channel_id,message:`${marryPeople[event.d.channel_id][event.d.user_id].reciever} Has accepted ${marryPeople[event.d.channel_id][event.d.user_id].sender}`})
        }else if(marryPeople[event.d.channel_id][event.d.user_id] && event.d.emoji.name=="❌"){
          //marrage denyied jsut go on about your day nothing to save here
            bot.sendMessage({to:event.d.channel_id,message:`${marryPeople[event.d.channel_id][event.d.user_id].reciever} Has denied ${marryPeople[event.d.channel_id][event.d.user_id].sender}`})
          console.log("Deny")
        }
        delete marryPeople[event.d.channel_id][event.d.user_id]
    }
  // console.log(JSON.stringify(marryPeople))
})



setInterval(function () {
  points--;
  // console.log("I removed a point Remaining: "+points);
  if(points==0){
    process.exit(0)
  }
}, 60000);//subtract one per minute 60000

bot.on('message', function(user, userID, channelID, message, event) {
   if (message.toLowerCase().includes("-hug <@378012152302141450>")){
     points=timeTillOffline;
   }


  //console.log("Heres what i Heard: '"+message+"'") uncomment it if you wantit
  if (message.toLowerCase() == "ping") {
    bot.sendMessage({
      to: channelID,
      message: "pong"
    })
  }
  if (message.toLowerCase().includes("im lonely") ) {
    bot.sendMessage({
      to: channelID,
      message: "I'm here for you... do you want to talk about it? Maybe? It's okay if you don't..."
    });
  }
  if (message.toLowerCase() == "9") {
    bot.sendMessage({
      to: channelID,
      message: "no 7"
    });
  }

if (message.toLowerCase() == "ur mum gay") {
  bot.sendMessage({
    to: channelID,
    message: "no u"
  });
}

if (message.toLowerCase() == "hey @378012152302141450") {
  bot.sendMessage({
    to: channelID,
    message: "hey, what's up?"
  });
}

if (message.toLowerCase() == "ur daddy lesbian") {
  bot.sendMessage({
    to: channelID,
    message: "no u"
  });
}

  if (message.toLowerCase().includes("<@340404431789228032>")) {
    bot.sendMessage({
      to: channelID,
      message: "arwens a weeb and we all know it"
    })
  }

  if (message.toLowerCase().includes("<@350405821924114434>")) {
    bot.sendMessage({
      to: channelID,
      message: "juan is a pervert"
    });
  }



  if (message.toLowerCase().includes("7")) {
    bot.sendMessage({
      to: channelID,
      message: "Error707"
    });
  }




  if (message.toLowerCase().includes("<@260221981834739712>")) {
    bot.sendMessage({
      to: channelID,
      message: "Gavin is totaly awesome and amazing!"
    });
  }

  if (message.toLowerCase().startsWith("<@455859551829360651>")) {
    bot.sendMessage({
      to: channelID,
      message: "uh oh!"
    });
  }


  if (message.toLowerCase().includes("<@!138781038120927232>")) {
    bot.sendMessage({
      to: channelID,
      message: " yet hexo is dad"
    });
  }
  if (message.toLowerCase().includes("what will happen this year")) {
    bot.sendMessage({
      to: channelID,
      message: "no idea but i hope it's good"
    });
  }





  // bot.on('message', function() {
  //     if (message.content === "$loop") {
  //       var interval = setInterval (function () {
  //         message.channel.send("123")
  //       }, 1 * 1000);
  //     }
  // });

  if (message.toLowerCase().includes("2018")) {
    bot.sendMessage({
      to: channelID,
      message: "I wonder what will happen this year?..."
    });
  }

  if (message.toLowerCase().includes("Whos the real dirty dan?")) {
    bot.sendMessage({
      to: channelID,
      message: "0.0"
    });
  }


  // var jsonfile = require('jsonfile')
  // var file = '/tmp/data.json'
  // jsonfile.readFile(file, function(err, obj) {
  //   console.dir(obj)
  // })

  if (message.toLowerCase().startsWith("-kiss")) {
    if (event.d.mentions[0]) { //check if anyone has been mentioned
      if (event.d.mentions[0].id != userID) { //!= means not equal to
      let kissArr=["https://media1.tenor.com/images/289ec1f0b0ee5163758122ed5fc1cb20/tenor.gif?itemid=5095865.gif","https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",""]
        bot.sendMessage({
          to: channelID,
          embed: {
            title: `${user} Kissed ${event.d.mentions[0].username}`,
            image: {
              url: kissArr[Math.floor(Math.random()*(kissArr.length-1))]
            }
          }
        })
      } else {
        bot.sendMessage({
          to: channelID,
          message: "Huh? D-did you just say k-kiss. I mean, I might be okay with it, as long as it's with you.~ *kisses*"
        })
      }
    } else {
      bot.sendMessage({
        to: channelID,
        message: "Hey! What are y-mph!~...*you unexpectedly kissed Oppai*... Oh... W-well, you're okay too I guess!" //idk
      })
    }
  }

  if (message.toLowerCase().startsWith("-help")) {
      bot.sendMessage({
        to: channelID,
         message:`=weird @name
-marry @name //proposes to @name
-cry //provides a crying gif for your sad times
-punch @name //punches @name with a angry gif
-hug @name //hugs @name with a gif
-slap @name //slaps @name with a gif
-ink @name //winks great for sexual hints or normal hints *wink
-rate //rates what ever you type after like rate my shoes
-kiss @name //kisses @name with a gif
ping //pong
im lonley //easter egg probaly should delete this...
ding //dong`
        })
    }

  //\\arrow willscode3
//   \\Yeet Will's code \/ delete if you want later ;)
    if (message.toLowerCase().includes("kys","kill yourself","suicide")) {
      bot.sendMessage({
        to:channelID,
        message:"No, you! Wait... Don't, please don't... For my sake. :persevere: NSPL: 1-800-273-8255"
      })
    }

//    if (message.toLowerCase().includes("your")) {
//      bot.sendMessage({
//        message:"You're"
//      })
//    }

if (message.toLowerCase().includes("blurred lines")) {
  bot.sendMessage({
    to:channelID,
    message:"i love that song! kinky"
  })
}


if (message.toLowerCase().includes("<456006076517580810> whats your favorite song")) {
  bot.sendMessage({
    to:channelID,
    message:"Hot Milk by Snail House! I love that song."
  })
}

if (message.toLowerCase().includes("mr.stark","mr stark","stark")) {
  bot.sendMessage({
    to:channelID,
    message:"I don't feel so good..."
  })
}

if (message.toLowerCase().includes("<456006076517580810> do you like black people","<456006076517580810> do you like white people","<456006076517580810> do you like asian people")) {
  bot.sendMessage({
    to:channelID,
    message:"Of couse! I like everybody. <3"
  })
}

if (message.toLowerCase().includes("black")) {
  bot.sendMessage({
    to:channelID,
    message:"What you trying to say?"
  })
}

if (message.toLowerCase().includes("nibba")) {
  bot.sendMessage({
    to:channelID,
    message:"Sad nibba hour..."
  })
}

if (message.toLowerCase().includes("sex")) {
  bot.sendMessage({
    to:channelID,
    message:"What? S-sex? Oh no... I-I'm not ready..."
  })
}

if (message.toLowerCase().includes("<456006076517580810> swear")) {
  bot.sendMessage({
    to:channelID,
    message:"DARN IT!"
  })
}

if (message.toLowerCase().includes("<456006076517580810> stats")) {
  bot.sendMessage({
    to:channelID,
    message:"methodEvent.running=True"
  })
}

if (message.toLowerCase().includes("<456006076517580810> whats your favorite number")) {
  bot.sendMessage({
    to:channelID,
    message:"Any prime number, mostly 7."
  })
}

if (message.toLowerCase().includes("<456006076517580810> whats your favorite color")) {
  bot.sendMessage({
    to:channelID,
    message:"Yellow, all the way!"
  })
}

if (message.toLowerCase().includes("<456006076517580810> how old are you")) {
  bot.sendMessage({
    to:channelID,
    message:"I am 20 years old."
  })
}

    if (message.toLowerCase().includes("thanos")) {
      bot.sendMessage({
        to:channelID,
        message:"W-wha? T-Thano- Oh no! He's not here is he?"
      })
    }

    if (message.toLowerCase().includes("john cena")) {
      bot.sendMessage({
        to:channelID,
        message:"Ya know, you're supposed to say that with passion."
        })
      }

    if (message.toLowerCase().includes("Will","William")){
      bot.sendMessage({
        to:channelID,
        message:'Will is a great, reliable friend!'
      })
    }


    if(message.toLowerCase().includes("<456006076517580810> i love you","<456006076517580810> ilu")) {
      bot.sendMessage({
        to:channelID,
        message:"O-oh? Oh. I see... W-well, I guess it would be rude to... I mean... ah! Hey, I-I think I lo-!... You too.~"

      })
    }

    if (message.toLowerCase().includes("cry")) {
      bot.sendMessage({
        to:channelID,
        message:"Uh oh. Please stop... If you... I might... *snif*"
      })
    }
      //Foot notes:
    //Tachon's ID; 260221981834739712
  //Flyer's ID; 455859551829360651
//End of will's code.

  if (message.toLowerCase().startsWith("-rate")) {
      let msg = message.replace("my", "your");
      bot.sendMessage({
        to: channelID,
         message:`I rate ${msg.substr(6)} **${Math.round(Math.random()*100)}/100**`
        })
    }

  if (message.toLowerCase().startsWith("-wink")) {
    if (event.d.mentions[0]) { //check if anyone has been mentioned
      if (event.d.mentions[0].id != userID) { //!= means not equal to
      let winkArr=["http://i.imgur.com/j8yF0UF.gif","https://media.giphy.com/media/izZJ67xqSCs7K/giphy.gif","http://i.imgur.com/B5pnDWm.gif","https://thumbs.gfycat.com/ElegantFixedGermanpinscher=small.gif","https://img.fireden.net/a/image/1447/02/1447021342351.gif","http://i0.kym=cdn.com/photos/images/original/001/033/066/763.gif"]
        bot.sendMessage({
          to: channelID,
          embed: {
            title: `${user} winked at ${event.d.mentions[0].username}`,
            image: {
              url: winkArr[Math.floor(Math.random()*(winkArr.length-1))]
            }
          }
        })
      } else {
        bot.sendMessage({
          to: channelID,
          message: "Ooooo..."
        })
      }
    } else {
      bot.sendMessage({
        to: channelID,
        message: ":wink:" //idk
      })
    }
  }


  if (message.toLowerCase().startsWith("-slap")) {
    if (event.d.mentions[0]) { //check if anyone has been mentioned
      if (event.d.mentions[0].id != userID) {
      let slapArr=["https://media1.tenor.com/images/0cff5692b5d7481067c0e449beb1bc1d/tenor.gif?itemid=7202047.gif","https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif","https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif"]
        bot.sendMessage({
          to: channelID,
          embed: {
            title: `${user} Slapped ${event.d.mentions[0].username}`,
            image: {
              url: slapArr[Math.round(Math.random()*(slapArr.length-1))]//multi url array
            }
          }
        })
      } else {
        bot.sendMessage({
          to: channelID,
          message: "Treat yourself like you would treat me or your mother!"
        })
      }
} else {//what even is this mess
 bot.sendMessage({
  to: channelID,
  message: "*Swipes hand in air.*" //idk
})
}
}

  if (message.toLowerCase().startsWith("-hug")) {
    if (event.d.mentions[0]) { //check if anyone has been mentioned
    let hugArr=["http://gifimage.net/wp=content/uploads/2017/01/Anime=hug=GIF=Image=Download=9.gif","http://gifimage.net/wp=content/uploads/2017/01/Anime=hug=GIF=Image=Download=5.gif","http://i.imgur.com/V2tjYJT.gif","https://ci.memecdn.com/6103609.gif","https://data.whicdn.com/images/70340866/original.gif","https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif"]
      bot.sendMessage({
        to: channelID,
        embed: {
          title: `${user} Hugged ${event.d.mentions[0].username}`,
          image: {
            url: hugArr[Math.floor(Math.random()*(hugArr.length-1))]

          }
        }
      })
    } else {
      bot.sendMessage({
        to: channelID,
        message: "*hugs back" //idk
      })
    }
  }




//i see








  if (message.toLowerCase() == "=event" && userID == "260221981834739712") { //only you cause ur cool
    bot.sendMessage({
      to: channelID,
      message: "```javascript\n" + JSON.stringify(event) + "```"
    })
  }



  if (message.toLowerCase().includes("<@!274685326826536960>")) {
    bot.sendMessage({
      to: channelID,
      message: "everyones dad exepct i have no dad <0.0>"
    });
  }


  if (message.toLowerCase().startsWith("-punch")) {
    if (event.d.mentions[0]) { //check if anyone has been mentioned
      if (event.d.mentions[0].id != userID) { //!= means not equal to
        let punchArr=["https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif","https://pa1.narvii.com/5785/8791a2c8f514a1aae5574bbecf50e5b4a3da83d4_hq.gif","https://media.giphy.com/media/JfQ9wuVbM3C6I/giphy.gif","http://i.imgur.com/QJG1SyJ.gif",]
        bot.sendMessage({
          to: channelID,
          embed: {
            title: `${user} Punched ${event.d.mentions[0].username}`,
            image: {
              url: punchArr[Math.floor(Math.random()*(punchArr.length-1))]
            }
          }
        })
      } else {
        bot.sendMessage({
          to: channelID,
          message: "Hey...Don't hit yourself like that! I-I don't like it!"
        })
      }
    } else {
      bot.sendMessage({
        to: channelID,
        message: "*so much violence...*" //idk
      })
    }
  }



  if (message.toLowerCase().startsWith("-cry")) {
    bot.sendMessage({
      to: channelID,
      embed: {
        title: `${user} is Crying`,
        image: {
          url: "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif"
        }
      }
    })
  };


  if (message.toLowerCase().startsWith("-marry")) {
    if (event.d.mentions[0]) { //check if anyone has been mentioned
      if (event.d.mentions[0].id != userID) { //!= means not equal to
      let mentioned=event.d.mentions[0]
        bot.sendMessage({
          to: channelID,
          embed: {
            title: `${user} Proposed? ${mentioned.username} ❤ 🌹`
          }
        },(err,res)=>{
            bot.addReaction({
                channelID,
                messageID:res.id,
                reaction:"✅"
            })
            setTimeout(()=>{ //discord rate limit got to wait
                bot.addReaction({
                channelID,
                messageID:res.id,
                reaction:"❌"
                })
            },300);
                if(!marryPeople[channelID]){
                    marryPeople[channelID]={}
                }
                marryPeople[channelID][mentioned.id]={sender:user,reciever:mentioned.username}
        })
      } else {
        bot.sendMessage({
          to: channelID,
          message: "Umm... ehehehe... Thanks, but no thanks. Nya~?"
        })
      }
    } else {
      bot.sendMessage({
        to: channelID,
        message: "Uhh... do ya need some friends?" //idk
      })
    }
  }


  if (message.toLowerCase().startsWith("-weird")) {
    if (event.d.mentions[0]){
    bot.sendMessage({
      to: channelID,
      embed: {
        title: `this is ${event.d.mentions[0].username}s favorite`,
        image: {
          url: "https://myanimelist.cdn=dena.com/s/common/uploaded_files/1479268280=d78d6b61957ed2842e024bdb53663b84.gif"
        }
      }
    })
  };
}

  if (message.toLowerCase() == "ding") {
    bot.sendMessage({
      to: channelID,
      message: "dong"
    });
  }

if (message.toLowerCase() == "thahec") {
bot.sendMessage({
  to: ChannelID,
  message: "5'7 happy rose coloured glasses"
});
}




if (message.toLowerCase() == "i need an ass to grab") {
bot.sendMessage({
  to: ChannelID,
  message: "hmpf! i have one of those ya know!"










  //PUT ALL COMMANDS ABOVE THIS POINT=========================================
});
client.login(process.env.BOT_TOKEN);
