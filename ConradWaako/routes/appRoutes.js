const express = require('express');
const router = express.Router();
const RegData = require('../models/registrationSchema')

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' })
});

//Save data to the database.
router.post("/", async(req, res) => {
    try {
        let patient = await RegData(req.body);
        patient.save();
        res.render("index")
    } catch (err) {
        res.send("Something went wrong with registration")
        console.log({ message: err })
    }
});

module.exports = router;