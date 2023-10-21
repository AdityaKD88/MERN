const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('add response from user');
});

router.get('/getall', (req, res) => {
    res.send('getall response from user');
});

router.get('/getbyemail', (req, res) => {
    res.send('getbyemail response from user');
});

router.get('/getbyid', (req, res) => {
    res.send('getbyid response from user');
});

router.get('/update', (req, res) => {
    res.send('update response from user');
});

router.get('/delete', (req, res) => {
    res.send('delete response from user');
});

module.exports = router;