const express = require('express');
const { data } = require('./randomData');

const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

app.get('/peoples', (req,res) =>{
    res.send({"success":true,"data":data});
});

app.get('/people/id/:placeholder', (req,res) =>{
    console.log(req.params);
    let newData = data.find( _data =>{
        return _data.id==(req.params.placeholder)
        // console.log(typeof(_data.id));
        // console.log(typeof(req.params.placeholder));
    }) 
    console.log(newData);
    res.send({"success":true,"data":newData});
});
   
app.get("/addpeople", (req,res)=>{
    const str = '<div><h1>Add People</h1><form method="POST"><input type="text" name="people_name"/> <button type="submit">Add</button></form></div>';
    res.send(str);
});
app.post("/addpeople", (req,res)=>{
    const {people_name} = req.body;
    // console.log(people_name);
    // console.log(req.body);
    if(people_name){
        res.send(`Welcome ${people_name}`)
    }
    else
    res.status(401).send("Enter Something Valid to post request");
});

app.get('/about', (req,res) =>{
 res.send("About Page!");    
});

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})