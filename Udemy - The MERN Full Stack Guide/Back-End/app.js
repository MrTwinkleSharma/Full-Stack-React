//3rd Party Modules
const express = require('express');
const mongoose = require('mongoose');

//Local Modules
const HttpError = require('./models/http-errors');
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(express.json())

//For CORS Errors
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    next();
});

app.use('/api/places',placesRoutes);
app.use('/api/users',usersRoutes);

app.get('/',(req, res)=>{
    console.log("Get Request on Root Url");
    res.send("HOME");
});

app.use((req, res, next)=>{
    const error = new HttpError("Couldn't Find this Route", 404);
    throw error; 
});

app.use((error, req, res, next)=>{
    if(res.headerSent)  return next(error);

    res.status(error.code || 500); 
    res.json({success:false, message:error.message || "An Unknown error has been occured, Sorry for Inconvenience!"})
});

mongoose.connect('mongodb+srv://MrTwinkleSharma:Twinkle@451@mongodbcluster.mcnv5.mongodb.net/database?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server is listening on port 5000");
    })
})
.catch((error)=>{
    console.log("A error has been occurred while connecting to database, Sorry for inconvenience !!");
})

