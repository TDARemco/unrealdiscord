const discord = require("discord.js");
module.exports = {
    name: 'soldiers',
    category: 'teams',
    description: 'soldiers',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT SOLDIERS]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Soldiers
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/721405053893607484/808912049392320542/elements-client-img-1.png")
            .setColor("#e08077")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
