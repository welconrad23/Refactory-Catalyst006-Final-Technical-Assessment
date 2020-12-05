const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    sname: String,
    gname: String,
    date: String,
    place: String,
    job: String,
    country: String,
    gender: String,
    category: String,
});

module.exports = mongoose.model("ministryoh", patientSchema);