//3rd Party Modules
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//Local Modules
import useForm from '../../shared/util/formHook.js';
import Card from '../../shared/Components/UIElements/Card.js';
import Button from '../../shared/Components/FormElements/Button/Button';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';

//CSS Files
import './PlaceForm.css';
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
function UpdatePlace(props) {
    const placeId = useParams().placeId;
    const [isLoading, setisLoading] = useState(true);
    
    const updateSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(currentStateOfInput);
    };

    const [currentStateOfInput,inputChangeHandler, setFormData] = useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        }
        
    }, false);

    
    const loadedPlace = ITEMS.find(place => place.id===placeId)
        
    useEffect(()=>{
        setFormData({
            title:{
                value:loadedPlace.title,
                isValid:true
            },
            description:{
                value: loadedPlace.description,
                isValid:true
            }
        }, true)
        setisLoading(false);
    },[setFormData, loadedPlace])
    
    if(!loadedPlace)
    {
        return <>
            <div className='center'>
                <Card>
                    <h2>Couldn't found Place</h2>
                </Card>
            </div>
        </>
    }
    if(isLoading)
    {
        return <>
            <div className='center'>
                <Card>
                    <h2>Loading.....</h2>
                </Card>
            </div>
        </>
    }

    return <>
    <form className='place-form' onSubmit={updateSubmitHandler} >
    <Input element='input'
    id='title' 
    type='text' 
    label='Title' 
    validators={[VALIDATOR_REQUIRE()]} 
    errorText='Please Enter a Valid Title' 
    onInput={inputChangeHandler}
    initialValue={currentStateOfInput.inputs.title.value} 
    initialValid={currentStateOfInput.inputs.title.isValid}/>

    <Input element='textarea'
    id='description' 
    type='text' 
    row = '5'
    label='Description' 
    validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText='Please Enter a Valid Description' 
    onInput={inputChangeHandler}
    initialValue={currentStateOfInput.inputs.description.value}
    initialValid={currentStateOfInput.inputs.description.isValid}/>


    <Button type='submit' disabled={!currentStateOfInput.isFormValid} >
        UPDATE
    </Button>
    </form>
    </>
}

export default UpdatePlace;

