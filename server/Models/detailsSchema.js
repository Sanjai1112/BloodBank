const mongoose = require("mongoose");
let detailsSchema = new mongoose.Schema({
  hospitalName: String,
  patientName: String,
  bloodGroup: String,
  contactNumber: String,
  address: String,
  status: String
});
module.exports = mongoose.model("Details", detailsSchema);
