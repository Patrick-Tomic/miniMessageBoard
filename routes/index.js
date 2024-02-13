var express = require('express');
var router = express.Router();

const messages = [
  {
    text:'The ROOF is soft TAAAAAR AAAA',
    user:'Chris Moltensati',
    added: new Date()
  },
  {
    text:'Fuck you want a bootinere',
    user:'Junior',
    added: new Date()
  },
  {
    text:'So did the hindenberge, maybe look into that too',
    user:'Tony Soprano',
    added: new Date()
  },
  {
    text:'Whats so fucking funny you fucking parade float',
    user:'Chris Moltesanti',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soprano Quotes', messages:messages });
});

module.exports = router;
