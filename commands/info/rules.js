const discord = require("discord.js");
module.exports = {
    name: 'rules',
    category: 'server',
    description: 'rules',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Server Rules")
            .setDescription(`    
            You can find the full version of our rules on the website.
            This link will take you there directly:
            
            **Rules**
            A short version of our rules.
            - Respect each other, we do not accept toxic behaviour.
            - Do not use 3rth party discord software.
            - Racism of anykind will get you perm banned.
            - Homophobia / Sexcism is both not allowed.
            - You are not allowed to sell league of legends accounts in here.
            - Advertising other servers / sites is not allowed.
            - Do not ask for ranks.
            
            - You can create a ticket in the: "create-ticket" chat.
            Use tickets for support, club related questions, team related questions.

            - Waiting Room
            Join the waiting room if you want support with voice chat.
            You will have to wait till a staff member drags you in to a support voice channel.
            Waiting room is also used to host applications.`)
            .setColor("#65acad")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
