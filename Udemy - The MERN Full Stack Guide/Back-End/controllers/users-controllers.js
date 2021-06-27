//3rd Party Modules
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

//Local Modules
const User = require('../models/user');
const HttpError = require('../models/http-errors');

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
    res.status(200).json({success:true, data:allUsers. map(user => user.toObject({getters:true}))});
};

const signUp = async(req, res, next)=>{   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        return next(error);
    }
    const {name, email, password} = req.body;
    
    let existingUser;
    try{
        existingUser = await User.findOne({email:email});
    }
    catch{
        const error =  new HttpError("Couldn't Signup, Something went wrong.",500); 
        return next(error);
    }
    if(existingUser){
        const error =  new HttpError('User Exists Already, Do Login',422); 
        return next(error);
    }
    let hashedPassword;
    try{
        hashedPassword = await bcryptjs.hash(password, 12);
    }
    catch(err){      
        error =  new HttpError("Couldn't Signup, Something went wrong.",500); 
        return next(error);
    }
    

    const newUser = User({
        name, 
        email,
        password:hashedPassword,
        image:req.file.path,
        places:[]
    });
    
    try{
        await newUser.save();
    }
    catch{
        const error = new HttpError("Couldn't Signup User, Something went wrong.", 500);
        return next(error);
    }

    res.status(201).json({success:true, data: newUser.toObject({getters:true})});
};


const logIn = async (req, res, next)=>{   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        return next(error);
   }
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email:email});
    }
    catch{
        const error =  new HttpError("Couldn't Log In, Something went wrong.",500); 
        return next(error);
    }
    if(!existingUser){
        const error = Error("Couldn't Log In, Credentials may be Wrong", 401);
        return next(error);
    }

    let isValidPassword;
    try{
        isValidPassword = await bcryptjs.compare(password, existingUser.password);
    }
    catch(err){
        const error =  new HttpError("Couldn't Log In, Something went wrong.",500); 
        return next(error);        
    }
    if(!isValidPassword){
        const error = Error("Couldn't Log In, Credentials may be Wrong", 401);
        return next(error);    
    }
    res.status(200).json({success:true, message:`User ${existingUser.name} Successfully Logged In!`, data: existingUser.toObject({getters:true})});
};


module.exports = {
    getUsers,
    logIn,
    signUp
}