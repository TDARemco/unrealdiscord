const discord = require("discord.js");
module.exports = {
    name: 'guardians',
    category: 'teams',
    description: 'guardians',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT GUARDIANS]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Guardians
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/721405053893607484/808912046829469696/elements-client-img-5.png")
            .setColor("#beed8e")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
