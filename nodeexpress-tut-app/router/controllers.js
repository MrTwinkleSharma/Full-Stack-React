const get = (req,res) =>{
    res.send("GET Request!")
};

const getWithId = (req,res) =>{
    res.send("GET with id Request!")    
};


const post = (req,res)=>{
    res.send("POST Request!")
};


const putWithId = (req,res) =>{
    res.send("PUT Request!")     
};


const deleteWithId = (req,res) =>{
    res.send("DELETE Request!")       
};

module.exports = {
    get,
    getWithId,
    post,
    putWithId,
    deleteWithId
}

