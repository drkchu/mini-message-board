const pool = require("./pool");

async function getMessages() {
    try {
        const result = await pool.query('SELECT id, text, name, added FROM messages');
    
        // Map the rows to the desired format
        const messages = result.rows.map(row => ({
          id: row.id,
          text: row.text,
          user: row.name,
          added: new Date(row.added), // Convert the timestamp to a JavaScript Date object
        }));
    
        console.log(messages);
        return messages;
    
      } catch (err) {
        console.error('Error retrieving messages:', err.stack);
      }
}

module.exports = {
    getMessages,
};
