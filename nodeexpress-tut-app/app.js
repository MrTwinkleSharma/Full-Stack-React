const express = require('express');

const app = express();
const logger = require('./middlewareFn');

app.use('/', logger);

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

app.get('/about', (req,res) =>{
 res.send("About Page!");    
});

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})