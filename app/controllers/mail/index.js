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
    from: '"supun.xyz👻" <contact@supun.xyz>',
    to: 'contact@supun.xyz',
    replyTo: data.email,
    subject: 'Message from: ' + data['name'],
    html: html,
    text: html
  };

  return new Promise((resolve, reject) => {

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject({status: false, text: error});
      }
      else {
        resolve({status: true, text: info.messageId});
      }

    });

  });


};
