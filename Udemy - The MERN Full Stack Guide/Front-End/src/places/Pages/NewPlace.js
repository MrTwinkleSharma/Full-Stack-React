import React from 'react';

import useForm from '../../shared/util/formHook.js';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';

import './PlaceForm.css';

function NewPlace(props) {


    //Pass the Initial State of Form and Initial Validity 
    const [currentStateOfInput,inputChangeHandler] = useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        address:{
            value:'',
            isValid:false
        }
    }, false);
    
    
    const addSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(currentStateOfInput);
    };
    return <>
        <form className='place-form' onSubmit={addSubmitHandler} >

            <Input element='input'
            id='title' 
            type='text' 
            label='Title' 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='Please Enter a Valid Title' 
            onInput={inputChangeHandler} />

            <Input element='textarea'
            id='description' 
            type='text' 
            row = '5'
            label='Description' 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText='Please Enter a Valid Description' 
            onInput={inputChangeHandler}/>
            
            <Input element='input'
            id='address' 
            type='text'
            label='Address' 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='Please Enter a Valid Address' 
            onInput={inputChangeHandler}/>

            <Button type='submit' disabled={!currentStateOfInput.isFormValid} >
                ADD PLACE 
            </Button>
        </form>
    </>
}

export default NewPlace;

