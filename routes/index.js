const express = require('express');
const router = express.Router();
const db = require("../db/queries");
const usernamesController = require("../controllers/usernamesController");

// Home route
router.get('/', usernamesController.getMessages);

// New message route
router.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});

// Posting a message
router.post('/new', (req, res) => {
  const {user, message} = req.body;

  messages.push({ text: message,
                  user: user,
                  added: new Date(),
                  id: nextId++ });

  res.redirect('/');
});

// Viewing a specific message
router.get('/message/:id', (req, res) => {
  const message = messages.find(m => m.id === parseInt(req.params.id));
  if (message)
    res.render('message', { title: 'Message Details', message: message });
  else
    res.status(404).send('Message not found');
});

module.exports = router;