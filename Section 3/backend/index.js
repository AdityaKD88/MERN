// import express
const express = require('express');

// initialize express
const app = express();
const port = 5000;

// creating a route (routing)
app.get('/', (req, res) => {
    res.send('response from express server');
});

app.get('/add', (req, res) => {
    res.send('add response from server');
});

app.get('/getall', (req, res) => {
    res.send('getall response from server');
});

app.get('/update', (req, res) => {
    res.send('update response from server');
});

app.get('/delete', (req, res) => {
    res.send('delete response from server');
});

// starting express server
app.listen(port, () => {console.log('server started');});