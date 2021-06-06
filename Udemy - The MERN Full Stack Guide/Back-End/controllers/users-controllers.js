const DUMMY_USERS = require('../dummyUsers');
const HttpError = require('../models/http-errors');


//Retrieve the all users
const getUsers = (req, res, next)=>{   
    res.status(200).json({success:true, data:DUMMY_USERS});
};


//LogIn User
const logIn = (req, res, next)=>{   

};


//Create User and LogIn
const signUp = (req, res, next)=>{   

};


module.exports = {
    getUsers,
    logIn,
    signUp
}