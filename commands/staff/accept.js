const Discord = require("discord.js");
module.exports = {
    name: 'event',
    category: 'announcements',
    description: 'event',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("Nieuw Team")
                .setDescription(`Een nieuw team is aangemaakt

                                 **Eigenaar:** ${dUser}
                                 **Leden:** ${dMessage}`)
                .setColor("#85e0ff")
                .setThumbnail("https://icons.iconarchive.com/icons/chrisl21/minecraft/72/Stone-Axe-icon.png")

            return message.channel.send(botEmbed);
        }
}