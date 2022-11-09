// db/queries/users.js

const db = require('../../configs/db.config');

const getAllBookedDays = () => {
  return db.query("SELECT * FROM bookedDays;").then(data => {
    return data.rows;
  });
};

const getBookedDaysById = id => {
  return db.query("SELECT * FROM bookedDays; WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const addBookedDay = (req, res) => {
  const { day, month, year } = req.body;
  const values = [day, month, year];
  const command = `
    INSERT INTO bookedDays (day, month, year)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  return db.query(command, values)
    .then(data => res.send(data.rows[0]));
};

module.exports = {getAllBookedDays, getBookedDaysById, addBookedDay};