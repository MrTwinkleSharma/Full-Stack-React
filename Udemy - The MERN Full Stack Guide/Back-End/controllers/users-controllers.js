const { validationResult } = require('express-validator');

const User = require('../models/user');
const HttpError = require('../models/http-errors');


//Retrieve the all users
const getUsers = (req, res, next)=>{   
    res.status(200).json({success:true, data:DUMMY_USERS});
};

//Create User and LogIn
const signUp = async(req, res, next)=>{   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // console.log(errors);
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        return next(error);
    }

    const {name, email, password} = req.body;
    
    let existingUser;
    try{
        existingUser = await User.findOne({email:email});
    }
    catch{
        // console.log(error);
        const error =  new HttpError("Couldn't Signup, Something went wrong.",500); 
        return next(error);
    }
    if(!existingUser){
        const error =  new HttpError('User Exists Already, Do Login',422); 
        return next(error);
    }
    const newUser = User({
        name, 
        email,
        password,
        image:"Image Url"
    });
    
    try{
        await newUser.save();
    }
    catch{
        const error = new HttpError("Couldn't Signup User, Please try again.", 500);
        return next(error);
    }

    res.status(201).json({success:true, data: newUser});
};


//LogIn User
const logIn = (req, res, next)=>{   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        throw error;
    }
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