//3rd Party Modules
import React, { useContext, useState } from 'react';

//Local Modules
import Input from '../../shared/Components/FormElements/Input/Input.js'
import Button from '../../shared/Components/FormElements/Button/Button.js';
import Card from '../../shared/Components/UIElements/Card.js';
import useForm from '../../shared/util/formHook.js';
import AuthContext from '../../shared/Context/auth-context.js';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'
import LoadingSpinner from '../../shared/Components/UIElements/LoadingSpinner.js';
import ErrorModal from '../../shared/Components/UIElements/ErrorModal.js';

//CSS Files
import './Authenticate.css'
import { useHttpClient } from '../../shared/util/useHttpClient.js';

function Authenticate (){
    const [loginMode, setloginMode] = useState(true);
    const [isLoading, error, clearError, sendRequest] = useHttpClient();

    const auth = useContext(AuthContext);
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
            setFormData(
                {
                    ...currentStateOfInput.inputs,
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


    const authSubmitHandler = async (event) =>{
        console.log("authSubmitHandler");
        event.preventDefault();
        if(loginMode){
            sendRequest({
                method:"POST",
                body:{
                    email:currentStateOfInput.inputs.email.value,
                    password:currentStateOfInput.inputs.password.value
                },
                api:'/api/users/login'
            });
            if(!error){
                auth.login();
            }
        }
        else{   
            sendRequest({
                method:"POST",
                body:{
                    name:currentStateOfInput.inputs.name.value,
                    email:currentStateOfInput.inputs.email.value,
                    password:currentStateOfInput.inputs.password.value
                },
                api:'/api/users/signup'
            });            
        }
    }
    return <>
    { error &&
     <ErrorModal onClear={clearError} error={error}/> 
    }
     <Card className='authenticate'> 
        {isLoading && <LoadingSpinner asOverlay/>}
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

            <Button type='submit' disabled={!currentStateOfInput.isFormValid}>{  !loginMode && 'Register'} {  loginMode && 'Login'} </Button>
    </form>
    <hr/>
    <Button onClick={switchHandler}>Switch to {  loginMode && 'SignUp'} {  !loginMode && 'Login'} Mode</Button>
    </Card>
    </>
}
export default Authenticate;

