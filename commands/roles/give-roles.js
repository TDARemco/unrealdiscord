const Discord = require("discord.js");
module.exports = {
    name: 'accept',
    category: 'announcements',
    description: 'accept',
    run: async (bot, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No permissions");
        let rMember = nessage,guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!rMember) return message.reply("Coudn't find that user.");
        let role = args.join(" ").slice(22);
        if(!role) return message.reply("Specify a role!");
        let gRole = message.guild.roles.find(`name`, role);
        if(!gRole) return message.reply("Coudn't find that user");
    
        if(rMember.roles.has(gRole.id));
        await(rMember.addRole(gRole.id));
    }
}