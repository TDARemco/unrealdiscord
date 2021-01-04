const discord = require("discord.js");
module.exports = {
    name: 'INFO4',
    category: 'server',
    description: 'INFO4',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Whitelist aanvraag")
            .setDescription(`
            Wanneer ik je geinvite heb is de eerste niet nodig.
            Dit doe ik alleen om het kanaal overzichtelijk te houden.

            Gebruik het volgende format:

            Wie heeft je geinvite:
            Minecraft naam:`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
