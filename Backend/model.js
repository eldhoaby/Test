
const mongoose = require("mongoose");

const blogschema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogModel = mongoose.model("Blog", blogschema);
module.exports = BlogModel;
