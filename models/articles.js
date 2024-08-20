const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publication_date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  tag: {
    type: Array,
  },
  image: {
    type: String,
    required: true,
  },
  hit: {
    type: String,
    required: true,
  },
});
const Articles = mongoose.model("Articles", productSchema);
module.exports = Articles;
