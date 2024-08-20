const express = require('express');
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "David",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Diana",
      added: new Date()
    }
  ];

// Home route
router.get('/', (req, res) => {
    res.render('index', {messages: messages, title: 'Home'});
});

module.exports = router;