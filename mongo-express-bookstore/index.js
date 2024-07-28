require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const URI = process.env.mongo_uri;
const Book = require('./models/books')
app.use(express.json());

mongoose
  .connect(URI)
  .then((req, res) => {
    app.listen(3300, () => {
      console.log("Database is connected");
    });
  })
  .catch((err) => {
    console.log("Error while connecting: ");
  });

  app.get('/',function(req,res){
    res.send(`Welcome to Bookstore`)
  })

  app.post('/books',async function(req,res){
    try{
        const book = new Book(req.body)
        await book.save()
        res.status(200).json({success:'Data Created'})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
  })

  app.post('./books',function(req,res){
    res.send(`Created a new book`)
  })

  app.get('/books',function(req,res){
    res.send(`Recieved all books`)
  })

  app.put('/books/:bookid',function(req,res){
    res.send(`Book updated successfully`)
  })

  app.delete('/books/:bookid',function(req,res){
    res.send(`Book deleted successfully`)
  })