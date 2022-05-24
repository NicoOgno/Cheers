const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const DBURL = process.env.DBURL || `mongodb://localhost:27017/myDatabase`;
const DBPORT = process.env.DBPORT || 27017;

mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log(`Something went wrong at DB connection! ${err}`)
  } else {
    console.log(`Database connected at port ${DBPORT}`)
  }
});

module.exports = mongoose;