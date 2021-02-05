const discord = require("discord.js");
module.exports = {
    name: 'INFO3',
    category: 'server',
    description: 'INFO3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Accept the Rules")
            .setDescription(`    
            **Agreed**
            Click on the icon down bellow this embed to agree with the rules.
            If you agree, you agree to know our rules.
            This means that a moderator has the full rights to punish you if you brake one.
            For more information please contact us in a ticket.
            `)
            .setColor("#52f244")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
