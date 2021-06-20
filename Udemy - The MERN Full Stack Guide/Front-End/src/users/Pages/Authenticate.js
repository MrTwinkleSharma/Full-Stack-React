//3rd Party Modules
import React, { useState } from 'react';

//Local Modules
import Input from '../../shared/Components/FormElements/Input/Input.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';
import Card from '../../shared/Components/UIElements/Card.js';
import useForm from '../../shared/util/formHook.js';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'

//CSS Files
import './Authenticate.css'

function Authenticate (){
    const [loginMode, setloginMode] = useState(true);

    const [currentStateOfInput, inputChangeHandler, setFormData] = useForm(
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

    const switchHandler = () =>{
        if(!loginMode){

            console.log(currentStateOfInput);
            setFormData(
                {
                    ...currentStateOfInput,
                    name:undefined
                }, 
                currentStateOfInput.inputs.email.isValid && currentStateOfInput.inputs.password.isValid                
            )
        }
        else{
            setFormData(
                {
                    ...currentStateOfInput.inputs,
                    name:{
                        value: '',
                        isValid :false
                    }
                },
                false
            )
        }
        setloginMode(prevMode => !prevMode);
    }


    const authSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("Authenticated" , currentStateOfInput);
    }

    return <Card className='authenticate'> 
    
        <form onSubmit={authSubmitHandler}>
        {
            !loginMode && 
            <Input element='input'
            id='name' 
            type='text' 
            label='Full Name' 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='Please Enter a Valid Name' 
            onInput={inputChangeHandler} />
        }

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

            <Button disabled={!currentStateOfInput.isFormValid}>{  !loginMode && 'Register'} {  loginMode && 'Login'} </Button>
            <Button onClick={switchHandler}>Switch to {  loginMode && 'SignUp'} {  !loginMode && 'Login'} Mode</Button>
    
    </form>

    </Card>
}
export default Authenticate;

