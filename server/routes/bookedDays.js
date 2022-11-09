// routes/users.js
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

module.exports = (db) => {
  router.put('/new', (req, res) => {
  // console.log('req.body =', req.body);
    const { day, month, year } = req.body;
    const values = [day, month, year];
    const command = `
      INSERT INTO bookedDays (day, month, year)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });
};

module.exports = router;