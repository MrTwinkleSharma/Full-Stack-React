const express = require('express');

const app = express();

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    // res.send();
    next();
}

app.get('/', logger, (req,res) =>{
 res.send("Home Page!");
});


app.get('/about', logger, (req,res) =>{
 res.send("Home Page!");    
});

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})