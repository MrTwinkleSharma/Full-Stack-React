const DUMMY_PLACES = require('../dummyPlaces');
const HttpError = require('../models/http-errors');
const Place = require('../models/place');

// We can use uuid module for unique id
const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const getPlacesByUserId = async (req, res, next)=>{
    const {userId} = req.params;

    let places;
    try{
        places = await Place.find({creator:userId}); 
    }
    catch{
        // console.log(error);
        const error = new HttpError("Couldn't retrieve the places, Something went wrong.",500);
        return next(error);
    } 

    //Note :- These 2 errors are different
    if(!places || places.length===0)
    {
        const error = new HttpError("No Places found for given User.",404);
        return next(error);
    }
    res.status(200).json({success:true, data:places.map(user=>{user.toObject({getters:true})})});
};

const getPlaceByPlaceId = async (req, res, next)=>{
    const {placeId} = req.params;

    let place;
    try{
        place = await Place.findById(placeId); 
    }
    catch{
        // console.log(error);
        const error = new HttpError("Couldn't retrieve the place, Something went wrong.",500);
        return next(error);
    } 

    //Note :- These 2 errors are different
    if(!place)
    {
        const error = new HttpError("No Place found for given id.",404);
        return next(error);
    }
    res.status(200).json({success:true, data:place.toObject({getters:true})});
    
}
const postPlaceForLoggedUser = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        throw error;
    }
    const { 
        placeTitle, 
        placeDescription, 
        placeAddress, 
        loggedInUserId, 
        placeLocationObject, 
        placeImageUrl } = req.body;

    const createdPlace = new Place({
            title:placeTitle,
            description:placeDescription,
            address:placeAddress,
            creator:loggedInUserId,
            location:placeLocationObject,
            image: placeImageUrl
    });
    try{
        await createdPlace.save();
    }
    catch{
        const error = new HttpError("Couldn't post Place, Please try again.", 500);
        return next(error);
    }
    
    res.status(201).json({success:true, data:createdPlace.toObject({getters:true})});
}

const patchUpdatePlaceByPlaceId = async (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        throw error;
    }

    const {placeId} = req.params;
    const {updatedTitle, updatedDescription} = req.body;

    let place;
    try{
        place = await Place.findById(placeId); 
    }
    catch{
        // console.log(error);
        const error = new HttpError("Couldn't Update the place, Something went wrong.",500);
        return next(error);
    } 
    place.title = updatedTitle;
    place.description = updatedDescription;

    try{
        await place.save();
    }
    catch{
        // console.log(error);
        const error = new HttpError("Couldn't Update the place, Something went wrong.",500);
        return next(error);
    } 


    
    if(!place){
        const error =  new HttpError('No Place Found for Given Place Id',404);  // Constructor accepts a string of error message and code
        return next(error);
    }

    res.json({success:true, data:place.toObject({getters:true})});
   
};
const deletePlaceByPlaceId = async (req, res, next)=>{
    const {placeId} = req.params;

    let place;
    try{
        place = await Place.findById(placeId); 
    }
    catch{
        // console.log(error);
        const error = new HttpError("Couldn't Delete the place, Something went wrong.",500);
        return next(error);
    } 
    if(!place){
        const error =  new HttpError('No Place Found for Given Place Id',404);  // Constructor accepts a string of error message and code
        return next(error);
    }
    try{
       await place.remove(); 
    }
    catch{
        // console.log(error);
        const error = new HttpError("Couldn't Delete the place, Something went wrong.",500);
        return next(error);
    } 
    res.status(200).json({success:true, message:"Place was Deleted Successfully!"});
};

module.exports = {
    getPlacesByUserId,
    getPlaceByPlaceId,
    postPlaceForLoggedUser, 
    patchUpdatePlaceByPlaceId, 
    deletePlaceByPlaceId
}