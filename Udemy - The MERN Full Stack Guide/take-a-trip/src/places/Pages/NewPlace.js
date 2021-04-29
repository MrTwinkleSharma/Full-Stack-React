import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';

import './NewPlace.css';

const formReducer = (currentStateOfInput, action) =>{

    switch(action.type)
    {
        case 'input_change':
            
            
            let isFormValid = true;
            for(const inputId in currentStateOfInput.inputs)
            {
                // Considering the input field which is changed
                if(action.inputId === inputId)
                {
                    isFormValid = isFormValid && action.isValid
                }


                // Considering the input field which were not changed in last event
                else
                isFormValid = isFormValid && currentStateOfInput.inputs[inputId].isValid;
            }
            return {
                ...currentStateOfInput,
                inputs: {
                  ...currentStateOfInput.inputs,
                  [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isFormValid: isFormValid
              };                
        default:
            return currentStateOfInput;
    }
  
};
function NewPlace(props) {

    const [currentStateOfInput,dispatch] = useReducer(formReducer, { 
        inputs:{
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        }
    },
    isFormValid:false
});

    const inputChangeHandler = useCallback((id, currentValue, isValid) => {
        dispatch({type:'input_change',inputId:id, isValid:isValid, value:currentValue});

    },[]);
    
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(currentStateOfInput);
    };
    return <>
        <form className='place-form' onSubmit={submitHandler} >

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

            <Button type='submit' disabled={!currentStateOfInput.isFormValid} >
                ADD PLACE 
            </Button>
        </form>
    </>
}

export default NewPlace;

