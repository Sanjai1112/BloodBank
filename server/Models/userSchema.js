const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  bloodgroup: String,
  phone: String,
  age: String
});
// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
