const express = require('express');
const { data } = require('./randomData');

const app = express();

app.use(express.urlencoded({extended:false}));

//This was missing
app.use(express.json())

app.get('/', (req,res) =>{
 res.send("Home Page!");
});

/*--------------------------GET METHOD------------------------*/
app.get("/api/people", (req,res) =>{
    res.send({"success":true,"data":data});
});

app.get('/api/people/:id', (req,res) =>{
    console.log(req.params);
    let newData = data.find( _data =>{
        return _data.id==(req.params.id)
        // console.log(typeof(_data.id));
        // console.log(typeof(req.params.id));
    }) 
    console.log(newData);
    res.send({"success":true,"data":newData});
});
   
/*--------------------------POST METHOD------------------------*/
app.get("/form/addpeople", (req,res)=>{
    const element = `<div>
                    <h1>Add People</h1>
                    <form action="/login" method="POST">
                    <input type="text" name="name"/> 
                    <button type="submit">Add</button>
                    </form>
                </div>`;

    res.send(element);
});

app.post('/login', (req,res) =>{
    const {name} = req.body;
    
    if(name){
        res.send(`Welcome ${name}`)
    }
    else
    res.status(401).send("Enter Something Valid to Post Request");
});
   
app.post("/api/people", (req,res)=>{
    const {name} = req.body;
    console.log(req.body);

    if(!name){
        res.status(400).send({"success":false, "errorMessage":"Enter Valid Data"})    
    }
    else
    res.send({"success":true, data:[...data,name]})    
});

/*--------------------------PUT METHOD------------------------*/
app.put('/api/people/:id', (req,res) =>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id,name);

    let find = false;
    const newData = data.map(person =>{
        if(person.id==id)
        {
            find = true;
            person.name = name;
        }
        return person;
    })

    if(!find){
        res.status(400).send({"success":false, "errorMessage":"No Person exist for given id."})    
    } 
    else
    res.json({"success":true,"data":newData});
    // res.send("PUT Request Successful");
});
   

/*--------------------------DELETE METHOD------------------------*/
app.delete('/api/people/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let find = data.find( _data =>{
        return _data.id==(req.params.id)
    });

    if(!find){
        res.status(400).send({"success":false, "errorMessage":"No Person exist for given id."})    
    } 
    else{
        const newData = data.filter(person =>(person.id!=id));
        res.json({"success":true,"data":newData});
        // res.send("Delete Request Successful");
    }
});
   
app.listen(3000, ()=>{
    console.log("Server is Listening at localhost:3000");
})
