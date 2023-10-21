const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('add response from product');
});

router.get('/getall', (req, res) => {
    res.send('getall response from product');
});

router.get('/getbybrand', (req, res) => {
    res.send('getbybrand response from product');
});

router.get('/getbyid', (req, res) => {
    res.send('getbyid response from product');
});

router.get('/update', (req, res) => {
    res.send('update response from product');
});

router.get('/delete', (req, res) => {
    res.send('delete response from product');
});

module.exports = router;