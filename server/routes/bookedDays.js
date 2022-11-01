// routes/users.js
const express = require('express');
const router = express.Router();
const bookedDays = require('../db/queries/bookedDays');


/* GET users listing. */
router.get('/', (req, res) => {
  bookedDays.getAllBookedDays().then(data => {
    console.log(data);
    res.json({bookedDays: data});
  });
});

module.exports = router;