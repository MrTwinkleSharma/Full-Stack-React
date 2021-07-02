const express = require('express');
const todoRoutes = require('./routes/todoRoutes.js')
const app = express();
const PORT = process.env.PORT || '5000';


app.use('/todo', todoRoutes);

app.get('/', (req, res)=>{
    res.send('HOME PAGE');
});

app.listen(PORT, ()=>{
console.log("Server is Listening on Port "+PORT);
})
