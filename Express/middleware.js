var express = require("express");
var app = express();

const middleWareFunction = async (req, res, next) => {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let isAuthenticated;
  await setTimeout(() => {
    if (isAuthenticated) {
        isAuthenticated = random(0,2);
        console.log("Middleware Function");
        next();
      }
      else res.send('User is not Authenticated')  
  }, 3000);
  
};

// app.use(middleWareFunction);

app.get("/", middleWareFunction,(req, res) =>{
  console.log("Inside the / route");
  res.send("Hello Middleware");
});

app.get("/no-middleware", function (req, res) {
  console.log("Inside the /no-middleware route");
  res.send("Hello no-middleware endpoint");
});

app.listen(3000);
