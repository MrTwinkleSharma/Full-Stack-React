import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';

import './NewPlace.css';

const formReducer = (currentStateOfInput, action) =>{

    switch(action.type)
    {
        case 'input_change':
            
            // console.log(currentStateOfInput.inputs.title);
            currentStateOfInput.isFormValid = true;
            for(const inputId in currentStateOfInput.inputs)
            {
                // console.log(inputId);
                // Considering the input field which is changed
                if(action.inputId === inputId)
                {

                    // console.log(currentStateOfInput[inputId]);
                    
                    // console.log(typeof(inputId));
                    currentStateOfInput.isFormValid = currentStateOfInput.isFormValid && action.isValid
                    currentStateOfInput.inputs[inputId].value = action.value;
                    currentStateOfInput.inputs[inputId].isValid = action.isValid;
                }


                // Considering the input field which were not changed in last event
                else
                currentStateOfInput.isFormValid = currentStateOfInput.isFormValid && currentStateOfInput.inputs[inputId].isValid;
            }
            // console.log(currentStateOfInput);
            return {
                ...currentStateOfInput,
                currentStateOfInput
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
    
    console.log(currentStateOfInput.isFormValid);
    return <>
        <form className='place-form'>

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

            <Button type='submit' disabled={!currentStateOfInput.isFormValid}>
                ADD PLACE 
            </Button>
        </form>
    </>
}

export default NewPlace;

