const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warn a user of your choice!",
    usage: "<User mention>",
    run: async (bot, message, args, guild) => {
        message.delete().catch(err => console.log(err));
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`Nop, you are not a moderator.`);
        let User = message.mentions.users.first() || null;

        if (User == null) {
            return message.channel.send(`Please mention the user you want to warn.`);
        } else {
            let Reason = message.content.slice(bot.prefix + 22 + 7) || null;
            if (Reason == null) {
                return message.channel.send(
                    `You did something wrong.`
                );
            }
            let Avatar = User.displayAvatarURL();
            let Channel = message.guild.channels.cache.find(
                (ch) => ch.name === "warnings"
            );
            if (!Channel)
                return message.channel.send(
                    `There is no channel in this guild which is called \`warnings\``
                );
            let Embed = new MessageEmbed()
                .setTitle(`Warning`)
                .setDescription(
                    `Staff member: \`${message.author.tag}\` warned \`${User.tag}\`! `
                )
                .setColor(`PURPLE`)
                .setThumbnail(Avatar)
                .addFields(
                    { name: "Mod ID", value: `${message.author.id}`, inline: true },
                    { name: "Mod Tag", value: `${message.author.tag}`, inline: true },
                    { name: "Warned ID", value: `${User.id}`, inline: true },
                    { name: "Warned Tag", value: `${User.tag}`, inline: true },
                    { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
                    {
                        name: "Date (M/D/Y)",
                        value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
                        inline: true,
                    }
                );
            Channel.send(Embed);
        }
    },
};