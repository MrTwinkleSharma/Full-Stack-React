//3rd Party Modules
import React from 'react';
import { useParams } from 'react-router';

//Local Modules
import PlaceList from '../Components/PlaceList';

//Image
import image from './tajmahal.jpg';

const ITEMS = [
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
        imageUrl:image
    }
]

function UserPlaces(){

    const userId = useParams().userId;
    const loadedPlaces = ITEMS.filter(place => place.creatorId===userId)

    return <>
    <PlaceList places = {loadedPlaces}/>
    </>
}
export default UserPlaces;