const { validationResult } = require('express-validator');

const User = require('../models/user');
const HttpError = require('../models/http-errors');


//Retrieve the all users
const getUsers = async (req, res, next)=>{   
    let allUsers;

    try{
        allUsers = await User.find({}, "-password");
    }
    catch{
        const error =  new HttpError("Couldn't retrieve Users, Something went wrong.",500); 
        return next(error);    
    }
    if(!allUsers)
    {
        const error =  new HttpError("No Users Found.",500); 
        return next(error);        
    }
    res.status(200).json({success:true, data:allUsers.map(user=>{user.toObject({getters:true})})});

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
    // console.log(typeof(existingUser));
    // console.log(typeof(newUser));
    try{
        await newUser.save();
    }
    catch{
        const error = new HttpError("Couldn't Signup User, Please try again.", 500);
        return next(error);
    }

    res.status(201).json({success:true, data: newUser.toObject({getters:true})});
};


//LogIn User
const logIn = async (req, res, next)=>{   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // console.log(errors);
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        return next(error);
   }
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email:email});
    }
    catch{
        // console.log(error);
        const error =  new HttpError("Couldn't Log In, Something went wrong.",500); 
        return next(error);
    }
    if(!existingUser || existingUser.password!==password){
        const error = Error("Couldn't Log In, Credentials may be Wrong", 401);
        return next(error);
    }
    res.status(200).json({success:true, message:`User ${existingUser.name} Successfully Logged In!`});
};


module.exports = {
    getUsers,
    logIn,
    signUp
}