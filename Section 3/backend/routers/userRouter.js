const express = require('express');
const Model = require('../models/userModel');

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

    // res.send('add response from user');
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

    // res.send('getall response from user');
});

// : denotes URL parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);

    Model.find({email: req.params.email})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
    
    // res.send('getbyemail response from user');
});

router.get('/getbyname/:name', (req,res) => {
    console.log(req.params.name);

    Model.find({name: req.params.name})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.post('/authenticate', (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.send('getbyid response from user');
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });

    // res.send('update response from user');
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });

    // res.send('delete response from user');
});

module.exports = router;