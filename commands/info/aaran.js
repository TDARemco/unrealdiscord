﻿const discord = require("discord.js");
module.exports = {
    name: 'aaran',
    category: 'server',
    description: 'aaran',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Aaran")
            .setDescription(`
            Aaran is een aaran, een aaran is een aaran.
            Vraag nie waar je er een vind, je moet zelf zoeken!`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
