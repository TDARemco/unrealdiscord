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
            **Algemene regels:**
            - Focus op samenwerken en gun elkaar ook iets. Ga elkaar dus niet tegenwerken.
            - Het is een PVE server dus ga ook geen traps voor elkaar maken.
            - Niet grieven.
            - Niet stelen.
            - Trollen kan MAAR er zijn grenzen dus stop ook als iemand het aangeeft!
            - Oogst niet andermans farms dit valt onder grieven (tenzij je toestemming hebt).
            - Geen xray of andere clients.
            - Dus... niet cheaten
            - Ga niet overal random blokken neer plaatsen.
            - Staff teleport niet. (alleen als je vast zit door een bug.)
            
            **Trade zone:**
            - Je mag niet je base bouwen binnen de trade zone.
            - De trade zone is 1000 blokken vanaf X: 0 Y:74 Z: 0
            
            **The end:**
            - Vanaf het moment dat de dragon verslagen is spawnt er ergens binnen de 30 dagen een nieuwe dragon.
            - Op het hoofd eiland geen 'grote dingen' bouwen.
            - Ieder team mag maximaal 1 enderman farm hebben.
            
            **Consequenties bij verbreken van regels:**
            - Bij grieven/stelen: word bepaald aan de schade die je hebt aangericht. (minimaal 1 dag ban)
            - Bij schelden met hedendaagse ziektes: 7 dagen ban
            - Bij base bouwen in de trade zone/the end: Je base word weggehaald en je spullen krijg je niet terug!
            Dat voor de regels
            En het volgende onder de tab info:`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
