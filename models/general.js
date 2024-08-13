const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
  logoImage: {
    type: String,
    required: true,
  },
  heroImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const General = mongoose.model("General", generalSchema);

module.exports = General;
