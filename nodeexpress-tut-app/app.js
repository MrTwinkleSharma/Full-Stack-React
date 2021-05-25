const express = require('express');
const path = require('path');
const { stringify } = require('querystring');

//Adding js file which contains data 
const {data} = require('./randomData');

const app = express();
//We can also call function immediately after require('express)();

app.use(express.static('./public'));

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "./index.html"))
// })

app.get('/apipage', (req,res)=>{
    res.send('<div><h2>This is the API page, You will find json via link Below!!</h2><a href="/apipage/jsondata"> Click Here</a></div>')
})

//To map particular things from json 
app.get('/apipage/jsondata', (req, res)=>{
    const newData = data.map( datas =>{
        const {_id, age, gender} = datas;
      return {_id, age, gender}
    }
    );
    res.json(newData);
});

//To Get a individual object/element
app.get('/apipage/jsondata/:placeHolder', (req, res)=>{
    console.log(req.params);
    const {placeHolder} = req.params;
    const selectedData = data.find( datas =>
        datas._id==placeHolder
        );
        
    console.log(selectedData);
    if(selectedData!=undefined)
    res.json(selectedData);
    else 
    res.status(404).send("Resource Not Found")
});

app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found")
})

app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})