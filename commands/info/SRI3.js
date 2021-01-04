const discord = require("discord.js");
module.exports = {
    name: 'INFO3',
    category: 'server',
    description: 'INFO3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Contentcreator aanvraag")
            .setDescription(`    
            Gebruik het format!!
            Dit doe ik alleen om het kanaal overzichtelijk te houden.
            
            
            Discordnaam(tag jezelf):
            Minecraft naam:
            Social link:`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
