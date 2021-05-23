const express = require('express');

const app = express();
//We can also call function immediately after require('express)();

app.get('/', (req, res)=>{
    res.send("Home Page")
})

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000.......")
})