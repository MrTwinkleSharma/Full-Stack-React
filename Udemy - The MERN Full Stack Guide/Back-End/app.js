const express = require('express');
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

//Middle ware to handle errors while sending response
app.use((error, req, res, next)=>{
    if(res.headerSent)
    {
        return next(error);
    }
    res.status(error.code || 500)  //500 means something went wrong on server
    res.json({success:false, message:error.message || "An Unknown error has been occured, Sorry for Inconvenience!"})

})

app.listen(5000, ()=>{
console.log("Server is listening on port 5000");
})