// routes/bookedDays.js
const express = require('express');
const router = express.Router();
const bookedDays = require('../db/queries/bookedDays');
const db = require('../configs/db.config');

// GET Booked Days listing. 
router.get('/', (req, res) => {
  bookedDays.getAllBookedDays().then(data => {
    // console.log(data);
    res.json({bookedDays: data});
  });
});

// PUT /bookedDays/new

router.put('/', (req, res) => {
  const { day, month, year } = req.body;
  const values = [day, month, year];
  const command = `
      INSERT INTO bookeddays (day, month, year)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
  return db.query(command, values)
    .then(data => res.send(data.rows[0]));
});

// PUT /projects/new
// module.exports = (db) => {
//   router.put('/', (req, res) => {
//     const { day, month, year } = req.body;
//     const values = [day, month, year];
//     const command = `
//       INSERT INTO projects (day, month, year)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;
//     return db.query(command, values)
//       .then(data => res.send(data.rows[0]));
//   });
// };

module.exports = router;