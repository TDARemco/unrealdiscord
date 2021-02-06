const discord = require("discord.js");
module.exports = {
    name: 'team',
    category: 'server',
    description: 'team',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Join a team")
            .setDescription(`    
            Welcome to NextGlitch.
            Joining a team is a great step to get better at the game.
            Its also a lot of fun of course.
            So if you want to improve or if you just want to have fun.
            Joining a team is easy and everyone is welcome.
            But, we are strict in our applications, we want to make sure that you have the right motivations.
            And also that you are joining with the right mindset.
            We accept low-elo players and we accept high elo players.
            Every one is welcome, as long as your motivated.

            **How do you get in a team?**
            - Register your self in #apply-request (not much work)
            - When our recruiters are there, you can join the waiting room and we speak with you.
            - After you have spoken with us, you will be accepted or rejected.
            - If you accepted, you will be placed in a team asap.

            **What makes us a good choice?**
            - Professional and experienced staff members. (been doing this for 8 years now)
            - A new org, you will be here from the start.
            - A place to learn and improve.
            - Friend community.
            - Online and Offline events.
            - Help with team management and coaching.

            If you have any questions,
            Please create a ticket in #create-ticket 
            Have a good one!

            `)
            .setColor("#52f244")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
