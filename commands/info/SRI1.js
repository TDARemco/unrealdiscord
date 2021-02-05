const discord = require("discord.js");
module.exports = {
    name: 'INFO1',
    category: 'server',
    description: 'INFO1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Article 1")
            .setDescription(`    
            **Discord Rules**
            The rules we follow on our discord server.

            **Article 1**
            - Respect each other, we do not accept toxic behaviour.
            - Do not use 3rth party discord software.
            - Racism of anykind will get you perm banned.
            - Homophobia / Sexcism is both not allowed.
            - You are not allowed to sell league of legends accounts in here.
            - Advertising other servers / sites is not allowed.
            - Do not ask for ranks.`)
            .setColor("#65acad")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
