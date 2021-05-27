const express = require('express');
const authorize = require('./middlewareAuthorize');

const app = express();
const logger = require('./middlewareFn');

app.use('/', [logger, authorize]);

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

app.get('/about', (req,res) =>{
 res.send("About Page!");    
});

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})