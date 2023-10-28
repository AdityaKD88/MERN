const express = require('express');
const Model = require('../models/productModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

    // res.send('add response from product');
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

    // res.send('getall response from product');
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