const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home Page.")
});

app.get('/about', (req, res) => {
    res.send("About Page.")
});

app.get('/contact', (req, res) => {
    res.send("Contact Page.")
});

app.get('/{*splat}', (req, res) => {
    res.send('404');
});

app.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running….')
});