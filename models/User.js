// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  occupation: String,
  skills: String,
  education: String,
  gender: String,
  age: Number,
});

module.exports = mongoose.model('User', userSchema);

