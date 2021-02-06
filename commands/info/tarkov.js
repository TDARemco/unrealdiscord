const discord = require("discord.js");
module.exports = {
    name: 'tarkov',
    category: 'server',
    description: 'tarkov',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Tarkov")
            .setDescription(`    
            Click on the emoji down bellow this message to receive a tarkov role.
            This will show you all the hidden tarkov chats.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/807345372367814756/807623719110836284/tARKOV.png")
            .setColor("#52f244")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
