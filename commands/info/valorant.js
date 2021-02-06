const discord = require("discord.js");
module.exports = {
    name: 'valorant',
    category: 'server',
    description: 'valorant',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Valorant")
            .setDescription(`    
            Click on the emoji down bellow this message to receive 
            a valorant role. This will show you all the hidden valorant chats.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/807345372367814756/807623728305274930/Valorant.png")
            .setColor("#52f244")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
