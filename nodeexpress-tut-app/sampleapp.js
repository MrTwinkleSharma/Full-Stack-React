const express = require('express');
const router = require('./router/people');

const app = express();

app.use('/api/people',router);

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})
