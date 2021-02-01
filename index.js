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
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }

    client.user.setActivity('NextGlitch', { type: 'PLAYING' });

});

client.login(process.env.token);
