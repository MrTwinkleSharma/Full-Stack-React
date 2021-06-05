const DUMMY_PLACES = require('../dummyPlaces');
const HttpError = require('../models/http-errors');

// We can use uuid module for unique id
const uuid = require('uuid/v4')

const getPlacesByUserId = (req, res, next)=>{
    const {placeId, userId} = req.params;

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

const getPlaceByPlaceId = (req, res, next)=>{
    const {placeId} = req.params;

    const requiredPlace = DUMMY_PLACES.find(place=>{
        if(placeId===place.id)
        return true;
    })
    if(requiredPlace)
    res.json({success:true, data:requiredPlace});
   
    else {
        const error =  new HttpError('No Place Found for Given Place Id',404);  // Constructor accepts a string of error message and code
        return next(error);
    }
}
const postPlaceForLoggedUser = (req, res, next)=>{
    const { 
        placeTitle, 
        placeDescription, 
        placeAddress, 
        loggedInUserId, 
        placeLocationObject, 
        placeImageUrl } = req.body;

    const createdPlace = {
        id:uuid(),
        title:placeTitle,
        description:placeDescription,
        address:placeAddress,
        creatorId:loggedInUserId,
        location:placeLocationObject,
        imageUrl: placeImageUrl
    };

    if(createdPlace){
    console.log("Place Added Successfully!");
    console.log(createdPlace);
    res.status(201).json({success:true, data:createdPlace});
    }
    else
    res.json({success:false, message:"Error Occured due to invalid data"});

}

const patchUpdatePlaceByPlaceId = (req, res, next)=>{
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