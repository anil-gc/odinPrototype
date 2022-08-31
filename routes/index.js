const { Router } = require('express');
var express = require('express');
const app = require('../app');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini messageBoard', messages:messages });
});


router.post('/new', (req,res) => {
  const messageUser = req.body.authorsName
  const messageText = req.body.message
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
})

module.exports = router;
