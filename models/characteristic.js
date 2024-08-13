const mongoose = require("mongoose");
const { Schema } = mongoose;

const charSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Characteristic = mongoose.model("Character", charSchema);

module.exports = Characteristic;
