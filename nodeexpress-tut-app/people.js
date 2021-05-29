const express = require('express');
const router = express.Router();

router.route('/')
.get((req,res) =>{
    res.send("GET Request!")
})
.post((req,res)=>{
    res.send("POST Request!")
});

router.route("/:id")
.get((req,res) =>{
    res.send("GET Request!")    
})
.put((req,res) =>{
    res.send("PUT Request!")     
})
.delete((req,res) =>{
    res.send("DELETE Request!")       
});


module.exports = router;
