const express = require('express');

const app = express();
//We can also call function immediately after require('express)();

app.get('/', (req, res)=>{
    res.send("Home Page")
})

app.get('/about', (req, res)=>{
    res.send("About Page")
})

app.all('*', (req, res)=>{
    res.send("Resource Not Found")
})

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})