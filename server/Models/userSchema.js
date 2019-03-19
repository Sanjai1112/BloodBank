const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  bloodgroup: String,
  phone: String,
  age: String
});
module.exports = mongoose.model("User", userSchema);
