var mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://eldhoaby10:eldho@cluster0.keuk6gd.mongodb.net/Blogdb?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
