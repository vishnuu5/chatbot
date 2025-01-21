const db = require('../db/connection');


exports.getChatResponse = (req, res) => {
  const { query } = req.body;
  db.query('SELECT response FROM chatbot_responses WHERE query = ?', [query], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length > 0) {
      res.json({ response: results[0].response });
    } else {
      res.json({ response: 'Sorry, I don’t understand that.' });
    }
  });
};
