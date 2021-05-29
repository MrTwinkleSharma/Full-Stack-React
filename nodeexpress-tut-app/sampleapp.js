const express = require('express');

const app = express();

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

app.route("/api/people")
    .get((req,res) =>{
        res.send("GET Request!")
    })
    .post((req,res)=>{
        res.send("POST Request!")
    });

app.route("/api/people/:id")
    .get((req,res) =>{
        res.send("GET Request!")    
    })
    .put((req,res) =>{
        res.send("PUT Request!")     
    })
    .delete((req,res) =>{
        res.send("DELETE Request!")       
    });
   

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})
