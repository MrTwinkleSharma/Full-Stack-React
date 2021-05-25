const express = require('express');
const path = require('path');


const app = express();
//We can also call function immediately after require('express)();

app.use(express.static('./public'));

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "./index.html"))
// })

app.get('/api/myjson', (req,res)=>{
    res.json({"skills":[
    "C++", 
    "GIT", 
    "Software Development", 
    "MERN Development"], 
    "education":[ 
    {"2018":"Intermediate"},
    {"2023":"B.Tech (Computer Science & Engineering"}]
    });
})

app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found")
})

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})