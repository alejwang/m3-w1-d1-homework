const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.get('/{*splat}', (req, res) => {
    res.send('404');
});

app.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running….')
});