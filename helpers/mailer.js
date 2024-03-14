

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD
  }
});

const sendIt = async(email , subject , content) =>{
    try{

        var mailOptions = {
        from: process.env.SMTP_MAIL,
         to: email,
         subject: subject,
        html: content
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(`onh : ${error}`);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });

    }catch(error){
        console.log("Error : ", error.message);
    }
}



module.exports = {
    sendIt
}