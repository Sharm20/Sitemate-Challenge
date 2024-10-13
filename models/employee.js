const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    dob: Date,
    employment_status: [String],
    sex: String,
    address: String,
    contact_num: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
