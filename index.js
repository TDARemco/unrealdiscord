const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
                                                                         

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler=> {

  require(`./handlers/${handler}`)(client);


});

client.on("message", (message) => {
  if (message.content.startsWith("i am banned")) {
    message.channel.send("That would be your own fault");
  } else

  if (message.content.startsWith("Good bot")) {
    message.channel.send("Prrrrrrr!");
  }

  if (message.content.startsWith("Bad bot")) {
    message.channel.send("Sorry papa!");
  }

    client.user.setActivity('NextGlitch', { type: 'PLAYING' });

});

client.login(process.env.token);
