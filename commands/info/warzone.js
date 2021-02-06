const discord = require("discord.js");
module.exports = {
    name: 'warzone',
    category: 'server',
    description: 'warzone',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Warzone")
            .setDescription(`    
            Click on the emoji down bellow this message to receive 
            a warzone role. This will show you all the hidden warzone chats.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/807345372367814756/807623726434353203/Warzone.png")
            .setColor("#52f244")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
