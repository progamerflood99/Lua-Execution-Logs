const express = require('express') // no
const app = express() // yes
const send = require('./sendMessage.js') // requre the function

app.get('/'+require('./config.json').pageName, (req,res)=>{ // route

/*

Username editon:

const user = req.query.userName

send.do('webhookurl','logname',user,'Title','image_url') // change them with anything you want

*/

send.do('webhookurl','logname','Someone Executed Your Script!','Title','image_url') // send the message with func

})

app.listen(reqire('./config.json').port, function(){ // start server on the port

console.log('simple thing') // print

})
