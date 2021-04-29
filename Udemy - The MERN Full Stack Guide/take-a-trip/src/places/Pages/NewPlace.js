import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'

import './NewPlace.css'
const initialStateOfInput = {

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

};

const formReducer = (currentStateOfInput, action) =>{

    console.log(currentStateOfInput.isFormValid);
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

            return currentStateOfInput;                    
        default:
            return currentStateOfInput;
    }
};
function NewPlace(props) {
    const titleChangeHandler = useCallback((id, currentValue, isValid) => {
        dispatch({type:'input_change',inputId:id, isValid:isValid, value:currentValue});

    },[]);

    const descriptionChangeHandler = useCallback((id, currentValue, isValid) => {
        dispatch({type:'input_change',inputId:id, isValid:isValid, value:currentValue});

    },[]);
    
   const [currentStateOfInput,dispatch] = useReducer(formReducer, initialStateOfInput);
    
    return <>
        <form className='place-form'>
            <Input element='input'
            id='title' 
            type='text' 
            label='Title' 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='Please Enter a Valid Title' 
            onInput={titleChangeHandler} />

            <Input element='textarea'
            id='description' 
            type='text' 
            label='Description' 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText='Please Enter a Valid Description' 
            onInput={descriptionChangeHandler}/>

        </form>
    </>
}

export default NewPlace;