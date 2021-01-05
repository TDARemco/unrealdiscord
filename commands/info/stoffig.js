const discord = require("discord.js");
module.exports = {
    name: 'stoffig',
    category: 'server',
    description: 'stoffig',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("GRATIS RECLAME")
            .setDescription(`
            Hallo, Dit is gratis reclame, gratis is goed! Toch?
            Nou, ik zou zeggen ga lekker naar mijn twitch en help me naar de 1000 follows!
            Dat is cool, en cool is ook goed!
            
            https://www.twitch.tv/stoffigkontje`)
            .setColor("#f2495f")
            .setImage("https://cdn.discordapp.com/attachments/783453881828900964/796059486506582056/subbadgecropped.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/783453881828900964/796059486506582056/subbadgecropped.png")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
