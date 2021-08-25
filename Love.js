const Canvas = require('canvas')
const discord = require('discord.js')

module.exports = {
    name: 'love',
    aliases: ["lv"],
    description: "this is a Love command!",
    async execute(client, message, args, Discord){

        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext("2d")
    
        const target = message.mentions.users.first()

        const trgembed = new Discord.MessageEmbed()
        .setTitle('<a:xo:867305880579604490>  **Please `[Mention]` Somebody **')
        .setColor('#4600FF')
        if(!target) return message.channel.send(trgembed).then(message.react('<a:xo:867305880579604490>'));
    
        const bg = await Canvas.loadImage("BACKGROUND LINK HERE")
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
    
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL( { format: 'png' } ))
        ctx.drawImage(avatar, 40, 25, 200, 200)
    
        const TargetAvatar = await Canvas.loadImage(target.displayAvatarURL( { format: "png" } ))
        ctx.drawImage(TargetAvatar, 460, 25, 200, 200)
    
    
        const heart = await Canvas.loadImage('https://media.discordapp.net/attachments/716216765448978504/858607217728159744/unknown.png')
        const broken = await Canvas.loadImage('https://media.discordapp.net/attachments/716216765448978504/858607537238179840/unknown.png')
        const random = Math.floor(Math.random() * 101)
    
        if(random >= 50) {
            ctx.drawImage(heart, 275, 60, 150, 150)
            const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'love.png')
            const embed = new discord.MessageEmbed()
            .setAuthor("مـیزان عـلاقه شـما به این شــخص")
            .setDescription(`${message.author} ${random}% ${target} <a:qalbii:876083140244934717>`)
            .attachFiles(attachment)
            .setImage(`attachment://love.png`)
            .setColor('#4600FF')
            .setFooter(message.author.username, message.author.displayAvatarURL())
            return message.channel.send(embed)
    
        } else {
            ctx.drawImage(broken, 275, 60, 150, 150)
            const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'broken.png')
            const embed = new discord.MessageEmbed()
            .setAuthor("مـیزان عـلاقه شـما به این شــخص")
            .setDescription(`${message.author} ${random}% ${target} <a:qalbii:876083140244934717>`)
            .attachFiles(attachment)
            .setImage(`attachment://broken.png`)
            .setColor('#4600FF')
            .setFooter(message.author.username, message.author.displayAvatarURL())
            return message.channel.send(embed)
    
        }
    
    }
        
    }
