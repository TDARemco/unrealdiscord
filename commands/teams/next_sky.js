const discord = require("discord.js");
module.exports = {
    name: 'sky',
    category: 'teams',
    description: 'sky',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT SKY]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Sky
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/721405053893607484/808912040114389042/h1-client-img-6.png")
            .setColor("#34cceb")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
