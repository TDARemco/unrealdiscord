const discord = require("discord.js");
module.exports = {
    name: 'INFO2',
    category: 'server',
    description: 'INFO2',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Regels")
            .setDescription(`    
            **Team:**
            In jou 'Team' zitten alleen spelers die je zelf geinvite hebt via @EtaLive.

            **De start:**
            -Je start op de coordinaten X:0 Y:74 Z: 0
            -Je start met helemaal niks.
            -Wil je je huis bouwen? ga uit de trade zone!

            **Trade zone:**
            -In de trade zone mag je geen farms maken en geen 'grote' redstone projecten.
            - Wil je een grote shop bouwen? Vraag het eerst aan bij een van ons.`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
