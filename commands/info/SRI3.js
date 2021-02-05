const discord = require("discord.js");
module.exports = {
    name: 'INFO3',
    category: 'server',
    description: 'INFO3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Article 3")
            .setDescription(`    
            **Support**
            How do you get help?

            **Article 3**
            - You can create a ticket in the: "create-ticket" chat.
            Use tickets for support, club related questions, team related questions.

            - Waiting Room 
            Join the waiting room if you want support with voice chat.
            You will have to wait till a staff member drags you in to a support voice channel.
            Waiting room is also used to host applications.
            `)
            .setColor("#65acad")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
