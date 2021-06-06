const DUMMY_USERS = require('../dummyUsers');
const HttpError = require('../models/http-errors');


//Retrieve the all users
const getUsers = (req, res, next)=>{   
    res.status(200).json({success:true, data:DUMMY_USERS});
};

//Create User and LogIn
const signUp = (req, res, next)=>{   
    const {id, name, email, password} = req.body;
    const hasUser = DUMMY_USERS.find(user => user.email===email);
    
    if(hasUser){
        
        //422 For Invalid User
        throw new Error("Couldn't Sign Up, Email already exists.", 422); 
    }
    const newUser = {
        id, // We can also use uuid()
        name, 
        email,
        password,
        places:[]
    }
    DUMMY_USERS.push(newUser);
    res.status(201).json({success:true, data: DUMMY_USERS});
};


//LogIn User
const logIn = (req, res, next)=>{   
    const {email, password} = req.body;

    const identifiedUser = DUMMY_USERS.find(user => user.email === email)
    if(!identifiedUser || identifiedUser.password!==password){

        //401 Authentication Error 
        throw new Error("Couldn't Log In, Credentials may be Wrong", 401);
    }
    res.status(200).json({success:true, message:`User ${identifiedUser.name} Successfully Logged In!`});
};


module.exports = {
    getUsers,
    logIn,
    signUp
}