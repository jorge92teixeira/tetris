require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/hello', (req, res) => {
  res.send('Hello from tetris');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use('/tetris', express.static(path.join(__dirname, '/client/build')));
}

module.exports = app;
