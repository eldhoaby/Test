const express = require("express");
require('./connection')

const BlogModel =require('./model');

var cors = require("cors");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here
app.post("/add", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.send({ message: "Blog added successfully!" });
  } catch (error) {
    console.log(error);
  }
});


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
