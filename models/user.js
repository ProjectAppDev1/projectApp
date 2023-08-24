const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    isRequired: true,
  },
  email: {
    type: String,
    isRequired: true
  },
  password: {
    type: String,
    isRequired: true,
  },
  isAdmin: {
    type: Boolean,
    isRequired: true,
    default: false
  }
});

module.exports = mongoose.model("User", User, "users");
