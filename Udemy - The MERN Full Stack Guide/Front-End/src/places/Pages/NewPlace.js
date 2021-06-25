//3rd Party Modules
import React, { useContext } from 'react';
import { useHistory } from 'react-router';

//Local Modules
import useForm from '../../shared/util/formHook.js';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js';
import { useHttpClient } from '../../shared/util/useHttpClient.js';
import AuthContext from '../../shared/Context/auth-context.js';

//CSS Files
import './PlaceForm.css';
import LoadingSpinner from '../../shared/Components/UIElements/LoadingSpinner.js';
import ErrorModal from '../../shared/Components/UIElements/ErrorModal.js';

function NewPlace() {

    const {isLoading, error, clearError, sendRequest} = useHttpClient();
    const auth = useContext(AuthContext);

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
    
    
    const history = useHistory();

    const addSubmitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response  = await sendRequest({
                api:'/api/places',
                headers:{
                    'Content-Type':"application/json ; charset=UTF-8"                    
                },
                method:'POST',    
                body:{
                    title:currentStateOfInput.inputs.title.value,
                    description:currentStateOfInput.inputs.description.value,
                    address:currentStateOfInput.inputs.address.value,
                    creator: auth.userId
                }
            })
            history.push(`/places/users/${auth.userId}`);
            console.log(response);
        }
        catch(err){}
    };
    return <>
        { isLoading && <LoadingSpinner asOverlay/> }
        { error && <ErrorModal onClear={clearError} error={error} /> }
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

