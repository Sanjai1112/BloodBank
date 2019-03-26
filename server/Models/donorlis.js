const mongoose = require("mongoose");
const DonorSchema = new mongoose.Schema({
  name: String,
  blood_group: String,
  contact_no: String,
  last_donated: String
});
module.exports = mongoose.model("Donor", DonorSchema);
