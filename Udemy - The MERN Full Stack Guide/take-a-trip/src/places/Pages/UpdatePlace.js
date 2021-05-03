import React from 'react';
import { useParams } from 'react-router';
import './PlaceForm.css';

import image from './tajmahal.jpg';
import Button from '../../shared/Components/FormElements/Button/Button';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';

import Input from '../../shared/Components/FormElements/Input/Input.js'

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

function UpdatePlace(props) {
    const placeId = useParams().placeId;

    const loadedPlace = ITEMS.find(place => place.id===placeId)
    
    console.log(loadedPlace);
    console.log(ITEMS[0].id===placeId);
    
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log();
    };

    if(!loadedPlace)
    {
        return <>
            <div className='center'>
                <h2>Couldn't found Place</h2>
            </div>
        </>

    }

    return <>
    <form className='place-form' onSubmit={submitHandler} >
    <Input element='input'
    id='title' 
    type='text' 
    label='Title' 
    validators={[VALIDATOR_REQUIRE()]} 
    errorText='Please Enter a Valid Title' 
    onInput={()=>{}}
    value={loadedPlace.title} 
    valid={true}/>

    <Input element='textarea'
    id='description' 
    type='text' 
    row = '5'
    label='Description' 
    validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText='Please Enter a Valid Description' 
    onInput={()=>{}}
    value={loadedPlace.description}
    valid={true}/>


    <Button type='submit' disabled={true} >
        UPDATE
    </Button>
    </form>
    </>
}

export default UpdatePlace;

