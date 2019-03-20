const mongoose = require("mongoose");
let detailsSchema = new mongoose.Schema({
  patientName: String,
  bloodGroup: String,
  contactNumber: String,
  additionalMessage: String,
  address: String,
  status: String
});
module.exports = mongoose.model("Details", detailsSchema);
