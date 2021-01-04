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
            **Server IP:**
            Etalive.mygs.co

            **Het Concept**

            Een friendly whitelisted survival wereld.
            Vanilla minecraft.
            Iedereen begint op de coördinaten X: 0 Y: 74 Z: 0 (je spawned hier vanzelf)
            Alles word vastgelegd in de logs dus stelen/greeven is een no go 

            **Trade Zone:**

            De trade zone is een zone waar je gebouwen mag maken die alleen bedoeld zijn voor het traden van spullen.
            Er is geen in game currency dus je zult moeten traden met spullen net zoals vroeger gebeurde.
            De trade zone is een zone van 1000 blokken vanaf nul

            **De Map**
            
            We hebben een live map waar je elkaar kan zien.
            Seed: 8426026102288270951
            http://51.195.33.175:8123/`)
            .setColor("#34c9eb")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
