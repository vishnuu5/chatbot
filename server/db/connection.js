const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Vishnu@root123',
  database: process.env.DB_NAME || 'chatbot',
  port: process.env.DB_PORT || 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
