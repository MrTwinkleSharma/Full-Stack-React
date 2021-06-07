const express = require('express');
const mongoose = require('mongoose');

const HttpError = require('./models/http-errors');
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

//Middle ware for converting body into a json like object and adding to request object
app.use(express.json())

app.use('/api/places',placesRoutes);
app.use('/api/users',usersRoutes);

app.get('/',(req, res)=>{
    console.log("Get Request on Root Url");
    res.send("HOME");
});


//Will be use for Error Handling if None of the other Middleware or Route has sent the Response
//Because the all routes are above this.

app.use((req, res, next)=>{
    const error = new HttpError("Couldn't Find this Route", 404);
    throw error; 
});

//Middle ware to handle errors while sending response
app.use((error, req, res, next)=>{
    if(res.headerSent)
    {
        return next(error);
    }
    res.status(error.code || 500)  //500 means something went wrong on server
    res.json({success:false, message:error.message || "An Unknown error has been occured, Sorry for Inconvenience!"})

})


//connect returns a promise
mongoose.connect('mongodb+srv://MrTwinkleSharma:Twinkle@451@mongodbcluster.mcnv5.mongodb.net/mongodatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server is listening on port 5000");
    })
})
.catch((error)=>{
    console.log("A error has been occurred while connecting to database, Sorry for inconvenience !!");
    // console.log(error);
})

