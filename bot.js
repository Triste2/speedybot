const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "speedy-";
client.on('ready', () => {
    console.log('I am ready!');
});

const adminprefix = "speedy-";
const devs = ['413685264565927967'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'sgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلايينق البوت الى **`)
} else 
  if (message.content.startsWith(adminprefix + 'sname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير اسم البوت الى`)
return message.reply("**يجب عليك الإنتظار ساعتين لتغير الاسم مرة اخرى**");
} else
  if (message.content.startsWith(adminprefix + 'savatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغيير أفتآر البوت الي`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغير تويتش البوت الى  ${argresult}**`)
}

});






client.on('message', omar => {
var prefix = ".";
if(omar.content.split(' ')[0] == prefix + 'drooms') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'droles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("")
}
});




			
				

				
				
				


client.on('message', message => {
    if (message.content === ".crooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.sendMessage(" ** You Don't Have | `[MANAGE_ROLES]` **");

        
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('news', 'text')
	 message.guild.createChannel('welcome','text')
	 message.guild.createChannel('-------------', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('games', 'text')
	 message.guild.createChannel('-------------', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('pic', 'text')
	 message.guild.createChannel('cut', 'text')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('.Funny', 'voice')
	 message.guild.createChannel('.Friends', 'voice')
	 message.guild.createChannel('Coffee', 'voice')
	 message.guild.createChannel('.Session', 'voice')
	 message.guild.createChannel('.Stars', 'voice')
	 message.guild.createChannel('.Elegant', 'voice')
	 message.guild.createChannel('.Clouds', 'voice')
	 message.guild.createChannel('.Cheerful', 'voice')
	 message.guild.createChannel('.Sunset', 'voice')
	 message.guild.createChannel('.Marvel', 'voice')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('.Music 1 ?', 'voice')
	 message.guild.createChannel('.Music 2 ?', 'voice')
	 message.guild.createChannel('.Music 3 ?', 'voice')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('.AloNe', 'voice')
	 message.guild.createChannel('.Twins', 'voice')
	 message.guild.createChannel('.Three', 'voice')
	 message.guild.createChannel('-------------', 'voice')
	 message.guild.createChannel('Sleep ,zZ', 'voice')



message.channel.sendMessage(" ** Just Wait To Make The Rooms **")
}
});






client.on('message', message => {
    if (message.content === ".croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage(" ** You Don't Have | `[MANAGE_ROLES]` **");

                     message.guild.createRole({ name: "| OwnerShip", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| President", color: "#000000", permissions: [] })
				     message.guild.createRole({ name: "| The Best", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Founder", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Owner", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Co Owner", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Admin", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Ministry", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| King", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Queen", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Staff", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Prince", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "| Princess", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Friends", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Vip +", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Vip", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Visitors", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Music", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "| Bots", color: "#000000", permissions: [] })
					 message.guild.createRole({ name: "Muted", color: "#000000", permissions: [] })
        

message.channel.sendMessage(" ** Just Wait To Make The Roles ** ")
}
});










	   
	   
	   
	   
	   
	   
client.on('message', message => {
   if (message.content.startsWith(".id")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers !**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
   .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
   .addField('Tag:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("id:", "**[" + `${mentionavatar.id}` + "]**", true)
   .addField("Created in:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
   
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
	   
	   
	   
	   
	   
	   
client.on('message', message => {
if (message.content === ".server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("** Server id :**", "**"+message.guild.id+"**",true)
.addField("** Server Owner :**", "**"+message.guild.owner+"**" ,true)
.addField("** Basic Chat :**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("** Location :**" , "**"+message.guild.region+"**",true)
.addField('** Number of Writing rooms :**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("** Number of Voice  rooms**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("** Number of days of server creation :**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("** Roles :**",`**[${message.guild.roles.size}]** Role `,true)
.addField("** The level of server protection :**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField(" Number of members :",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});
	   


	   
	   



					
					
					client.on('message', message => {
    if (message.content.startsWith(".avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


	 
	 
	 





client.on('message', message => {
	var prefix = ".";
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`** The member was moved to your room ** | :white_check_mark::joy:`)

 }
   });
   


   

   
   
   
client.on('message', message => {
	var prefix ='.';
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


  
  
  

  
  
  client.on('message', message => {
   if (message.content === ".count") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`, true)
 
  message.channel.sendEmbed(embed);
    }
});



client.login(process.env.BOT_TOKEN);
