import React from 'react';

import Input from '../../shared/Components/FormElements/Input/Input.js'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';
import Card from '../../shared/Components/UIElements/Card.js';
import useForm from '../../shared/util/formHook.js';

import './Authenticate.css'

function Authenticate (){

    const [currentStateOfInput, inputChangeHandler] = useForm(
        {
            email:{
                value:'',
                isValid:false
            },

            password:{
                value:'',
                isValid:false
            }
        }
        ,false
    )

    const authSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("Authenticated" , currentStateOfInput);
    }

    return <Card className='authenticate'> 
    
        <form onSubmit={authSubmitHandler}>
        <Input element='input'
            id='email' 
            type='text' 
            label='Email Id' 
            validators={[VALIDATOR_EMAIL()]} 
            errorText='Please Enter a Valid Email Id' 
            onInput={inputChangeHandler} />

            <Input element='input'
            id='password' 
            type='password' 
            label='Password'
            validators={[VALIDATOR_MINLENGTH(8)]} 
            errorText='Please Enter a Valid Password' 
            onInput={inputChangeHandler}/>
            <Button inverse to='/SignupForm'>Sign Up</Button>

            <Button disabled={!currentStateOfInput.isFormValid}>Login</Button>
    </form>
    </Card>
}
export default Authenticate;