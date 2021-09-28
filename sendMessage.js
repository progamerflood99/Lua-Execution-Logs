const { Webhook, MessageBuilder } = require('https://discord.com/api/webhooks/892546252376539177/Xag0GGj-A1jXAiGoq0cw5F_ZmlB1pt33fBOpzDy3e5fcOUnwPhHMmhpqcjmZfunuqp1t');
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
