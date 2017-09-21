var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact',
        {
            title:'Contact'

        }

    );
});

router.post('/send',function (req,res,next) {
   var transporter = nodemailer.createTransport({
       service:'Gmail',
       auth:{
           user:'mr.nuruzzamancse@gmail.com',
           pass:'No Password'
       }
   }) ;

   var mailOptions = {
       from:'"Nuruzzaman?"<mr.nuruzzamancse@gmail.com>',
       to:'mr.nuruzzamancse@gmail.com',
       subject:'Hello from PCRepair',
       text:'You have a submission from .... Name: '+req.body.name+'Email: '+req.body.email+'Message: '+req.body.message,
       html:'<p>You have a submission from .. </p><ul><li>'+req.body.name+'</li><li> Email: '+req.body.email+'</li><li> Meassage: <li>'+req.body.message+'</li></ul>'

   }

   transporter.sendMail(mailOptions,function (err,info) {

       if(err)
           return console.log(err);
       console.log('Message sent: '+info.response);
       res.redirect('/');

   })

});

module.exports = router;
