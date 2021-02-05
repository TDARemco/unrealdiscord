const discord = require("discord.js");
module.exports = {
    name: 'INFO2',
    category: 'server',
    description: 'INFO2',
    run: async (bot, message, args, guild) => { 

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Article 2")
            .setDescription(`    
            **Finding a team**
            Information about finding a team.

            **Article 2**
            - Read up in: "join a team" chat. 
            - Follow the steps in there.
            
            - Do not DM people for personal recruitment.
            - Do not recruit members from our server.
            - Do not lie about your information in your application.

            - You can join a team in this org.
            - All elo's are welcome to join.
            - Amateur and Semi-pro gameplay.
            - Professional staff and help.
            `)
            .setColor("#65acad")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
