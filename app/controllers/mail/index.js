const nodemailer = require('nodemailer');
const pug = require('pug');
require('dotenv').config();

exports.sendMail = function (data) {

  const html = pug.renderFile('views/contact-email.pug', data, null);

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USERNAME, // generated ethereal user
      pass: process.env.MAIL_PASSWORD // generated ethereal password
    }
  });


  let mailOptions = {
    from: '"supun.xyz👻" <hello@supun.xyz>',
    to: 'hello@supun.xyz',
    replyTo: data.email,
    subject: 'Message from: ' + data['name'],
    html: html,
    text: html
  };

  return new Promise(function(resolve, reject) {

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject({status: true, text: error});
      }
      else {
        resolve({status: true, text: info.messageId});
      }

    });

  });


};
