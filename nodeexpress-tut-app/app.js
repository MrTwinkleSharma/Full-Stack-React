const express = require('express');
const { data } = require('./randomData');

const app = express();


app.get('/', (req,res) =>{
 res.send("Home Page!");
});

app.get('/peoples', (req,res) =>{
    res.send(JSON.stringify(data));
});
   

app.get('/people/id/:placeholder', (req,res) =>{
    console.log(req.params);
    let newData = data.find( _data =>{
        return _data.id==(req.params.placeholder)
        // console.log(typeof(_data.id));
        // console.log(typeof(req.params.placeholder));
    }) 
    console.log(newData);
    res.send(JSON.stringify(newData));
});
   
app.get('/about', (req,res) =>{
 res.send("About Page!");    
});

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})