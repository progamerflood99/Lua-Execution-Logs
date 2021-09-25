const { Webhook, MessageBuilder } = require('discord-webhook-node');
const sendMessage = (webhook,arg2,arg,title,image)=>{
   const embed = new MessageBuilder()
   .setTitle(title) // title
   .setThumbnail(image) // use img url it'd be better
   .addField(arg2, arg, true)
   .setTimestamp();
    web = new Webhook(webhook)
   web.send(embed)
}

module.exports.do = sendMessage

//
