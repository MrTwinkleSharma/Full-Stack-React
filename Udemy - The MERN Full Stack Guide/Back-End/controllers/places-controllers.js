const DUMMY_PLACES = require('../dummyPlaces');
const HttpError = require('../models/http-errors');
const Place = require('../models/place');

// We can use uuid module for unique id
const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const getPlacesByUserId =  (req, res, next)=>{
    const {userId} = req.params;

    const requiredPlace = DUMMY_PLACES.filter(place=>{
        if(userId===place.creatorId)
        return true; 
    })
    
    if(requiredPlace.length>0)
    res.json({success:true, data:requiredPlace});

    else {
        const error =  new HttpError('No Places Found for Given User Id',404);  // Constructor accepts a string of error message and code 
        return next(error);
    }
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
    res.status(200).json({success:true, data:place});
    
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
    
    res.status(201).json({success:true, data:createdPlace});
}

const patchUpdatePlaceByPlaceId = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        const error =  new HttpError('Invalid Inputs, Please check your Data.',422); 
        throw error;
    }

    const {placeId} = req.params;
    const {updatedTitle, updatedDescription} = req.body;

    let found = false;
    
    const newPlaces = DUMMY_PLACES.map(place=>{
        if(placeId===place.id)
        {
            found = true;

            if(updatedTitle)
            place.title = updatedTitle;

            if(updatedDescription)
            place.description = updatedDescription;
        }
        return place;
    });
    
    if(found)
    res.json({success:true, data:newPlaces});
   
    else {
        const error =  new HttpError('No Place Found for Given Place Id',404);  // Constructor accepts a string of error message and code
        return next(error);
    }
};
const deletePlaceByPlaceId = (req, res, next)=>{
    const {placeId} = req.params;

    let found = false;
    const newPlaces = DUMMY_PLACES.filter(place=>{
        if(placeId===place.id){
            found = true;
            return false;
        }
        else return true;
    });

    if(found)
    res.json({success:true, data:newPlaces});
   
    else {
        const error =  new HttpError('No Place Found for Given Place Id',404);  // Constructor accepts a string of error message and code
        return next(error);
    }
};

module.exports = {
    getPlacesByUserId,
    getPlaceByPlaceId,
    postPlaceForLoggedUser, 
    patchUpdatePlaceByPlaceId, 
    deletePlaceByPlaceId
}