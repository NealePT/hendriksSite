// routes/bookedDays.js
const express = require('express');
const router = express.Router();
const bookedDays = require('../db/queries/bookedDays');

// GET Booked Days listing. 
router.get('/', (req, res) => {
  bookedDays.getAllBookedDays().then(data => {
    // console.log(data);
    res.json({bookedDays: data});
  });
});

// PUT /bookedDays/new

router.put('/', (req, res) => {
  // bookedDays.addBookedDay(req, res).then(data => {
  //   res.json({bookedDays: data});
  // });
  console.log('req.body = ', req.body);
  console.log(res);
});


module.exports = router;