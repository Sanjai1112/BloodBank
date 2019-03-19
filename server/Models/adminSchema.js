var mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    adminname: String,
    password: String
})
module.exports = mongoose.model("Admin", adminSchema);