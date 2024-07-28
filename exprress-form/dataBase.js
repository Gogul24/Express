const express = require("express");
const { mongoose } = require("mongoose");

const app = express();
app.use(express.json());

const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/first")
  .then(() => {
    app.listen(port, () => {
      console.log('Database is connected');
      console.log(`App is listening at port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error occured while connecting the database");
  });

  app.get('/',function(req,res){
    res.send('Hello From Database')
  })