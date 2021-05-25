const express = require('express');
const path = require('path');

//Adding js file which contains data 
const {data} = require('./randomData');

const app = express();
//We can also call function immediately after require('express)();

app.use(express.static('./public'));

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "./index.html"))
// })

app.get('/apipage', (req,res)=>{
    res.send('<div><h2>This is the API page, You will find json via link Below!!</h2><a href="/apipage/jsondata"> Click Here</a></div>')
})

app.get('/apipage/jsondata', (req, res)=>{
    res.json(data);
});

app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found")
})

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})