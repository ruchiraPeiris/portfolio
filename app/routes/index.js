
import {sendMail} from '../controllers/mail/index'
import isEmail from 'validator/lib/isEmail';

let express = require('express');
let router = express.Router();

router.post('/say/hello', (req, res, next) => {
  const data = req.body;

  if (Object.keys(data).length && isEmail(data.email)) {
    next();
  }
  else{
    res.send({status: false, text: 'invalid email'});
  }

}, (req, res, next) => {
  const data = req.body;
  sendMail(data).then((success) => {
    res.send(success);
  }).catch(error=>{
    res.send(error);
  });
});

module.exports = router;
