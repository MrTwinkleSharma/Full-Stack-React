const express = require('express');

const app = express();

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

/*--------------------------GET METHOD------------------------*/
app.get("/api/people", (req,res) =>{
  res.send("GET Request!")
    
});

app.get('/api/people/:id', (req,res) =>{
    res.send("GET Request!")    
});
   
/*--------------------------POST METHOD------------------------*/   
app.post("/api/people", (req,res)=>{
    res.send("POST Request!")
});

/*--------------------------PUT METHOD------------------------*/
app.put('/api/people/:id', (req,res) =>{
    res.send("PUT Request!")     
});
   

/*--------------------------DELETE METHOD------------------------*/
app.delete('/api/people/:id', (req,res) =>{
    res.send("DELETE Request!")       
});
   

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})
