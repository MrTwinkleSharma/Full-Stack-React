const express = require('express');
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use('/api/places',placesRoutes);
app.use('/api/users',usersRoutes);

app.get('/',(req, res)=>{
    console.log("Get Request on Root Url");
    res.send("HOME");
});

app.listen(5000, ()=>{
console.log("Server is listening on port 5000");
})