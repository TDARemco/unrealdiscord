const discord = require("discord.js");
module.exports = {
    name: 'lions',
    category: 'teams',
    description: 'lions',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT LIONS]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Lions
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/721405053893607484/808912043762515978/h1-client-img-3.png")
            .setColor("#f5a24e")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
