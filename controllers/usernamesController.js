const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getMessages();

    res.render('index', {messages: messages, title: 'Home'});
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('An error occurred');
  }
};
 
module.exports = {
  getMessages
};
