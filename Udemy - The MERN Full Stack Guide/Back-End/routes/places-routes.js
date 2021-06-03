const { Router } = require('express');
const express = require('express');

const router =  Router();

const DUMMY_PLACES = [
    {
        id:"p1",
        title:"Taj Mahal",
        description:"One of the seven Wonders of World, people often called it symbol of Love",
        address:"Agra, India",
        creatorId:'u1',
        location:{
            lat:27.1751448,
            lng:78.0421422
            },
        imageUrl:'image link will be appear here'
    },   {
        id:"p2",
        title:"Taj Mahal",
        description:"One of the seven Wonders of World, people often called it symbol of Love",
        address:"Agra, India",
        creatorId:'u1',
        location:{
            lat:27.1751448,
            lng:78.0421422
            },
        imageUrl:'image link will be appear here'
    },   {
        id:"p3",
        title:"Taj Mahal",
        description:"One of the seven Wonders of World, people often called it symbol of Love",
        address:"Agra, India",
        creatorId:'u2',
        location:{
            lat:27.1751448,
            lng:78.0421422
            },
        imageUrl:'image link will be appear here'
    }
]

router.get('/', (req, res)=>{
    console.log("Get Request in Places Route");
    if(DUMMY_PLACES.length>0)
    res.json({success:true, data:DUMMY_PLACES});
    
    else res.status(404).json({success:false, message:"No Places Found"});
    
});

router.get('/users/:userId', (req, res)=>{
    const {placeId, userId} = req.params;
    // console.log("Get Request in --api/places/users/:userId-- Route");

    const requiredPlace = DUMMY_PLACES.filter(place=>{
        if(userId===place.creatorId)
        return true; 
    })
    // console.log(requiredPlace);
    // console.log([]!=[]);
    // console.log([]!==[]);

    if(requiredPlace.length>0)
    res.json({success:true, data:requiredPlace});
    else res.status(404).json({success:false, message:"No Place Found for Given User Id"});
});

router.get('/:placeId', (req, res)=>{
    const {placeId} = req.params;
    // console.log("Get Request in --api/places/:placesId-- Route");

    const requiredPlace = DUMMY_PLACES.find(place=>{
        if(placeId===place.id)
        return true;
    })
    if(requiredPlace)
    res.json({success:true, data:requiredPlace});
    else res.status(404).json({success:false, message:"No Place Found for Given Place id"});
});

module.exports = router;