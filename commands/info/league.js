const discord = require("discord.js");
module.exports = {
    name: 'league',
    category: 'server',
    description: 'league',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("League of Legends")
            .setDescription(`    
            Click on the emoji down bellow this message to receive 
            a league role. This will show you all the hidden league chats.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/807345372367814756/807623725515145226/league.png")
            .setColor("#52f244")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
