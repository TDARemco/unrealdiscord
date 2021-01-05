const discord = require("discord.js");
module.exports = {
    name: 'INFO1',
    category: 'server',
    description: 'INFO1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Informatie")
            .setDescription(`    
            **Server ip:**
            Etalive.mygs.co

            **Conecept uitleg:**
            Een vanilla survival server zonder een ingame currency.
            Iedereen begint op de zelfde locatie genaamd het 0 punt.
            Je hebt vanaf het 0 punt een zone van 1000 blokken genaamd de trade zone.
            Hier mag je je base niet maken, Het is dus dan ook de bedoeling om hier alleen shops te maken.
            Wanneer de enderdragon verslagen hebben dan houd het spel niet op....
            Als team zijnde ga je dan projecten maken (bijvoorbeeld een kasteel bouwen of een stad bouwen.)
            Zo krijgen we uiteindelijk een wereld met veel mooie bouwwerken die we van elkaar kunnen bewonderen.
            Niks word ingecheat dus ook niet vanuit staff.

            **Live map:**
            http://51.195.33.175:8123/
            **seed:**
            8426026102288270951`)
            .setColor("#34c9eb")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
