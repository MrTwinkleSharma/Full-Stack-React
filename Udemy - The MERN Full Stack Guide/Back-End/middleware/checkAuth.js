//3rd Party Modules
const jwt = require('jsonwebtoken');

//Local Modules
const HttpError = require('../models/http-errors');

module.exports = (req, res, next) =>{
    //We are extracting token from header we can use url also but not body
    //because get and other some request may not use body
    try{
        const token = req.headers.authorization.split(' ')[1];  //Authorization: 'Bearer TOKEN'
        if(!token)
        {
            throw new Error('Authentication Failed')
        }
        const decodedToken = jwt.verify(token, 'super_secret_code');
        req.userData = decodedToken.userId;
        next();
    }
    catch(err){
        const error = new HttpError('Authentication Failed', 401);
        next(error);
    }
}