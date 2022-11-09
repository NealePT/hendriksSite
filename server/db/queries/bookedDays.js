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


module.exports = {getAllBookedDays, getBookedDaysById};