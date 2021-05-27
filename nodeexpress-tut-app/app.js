const express = require('express');

const app = express();

app.get('/', (req,res) =>{
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  
  console.log(method, url, year);
  res.send("Home Page!");
});

app.get('/about', (req,res) =>{
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  
  console.log(method, url, year);
  res.send("About Page!");
});


app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})