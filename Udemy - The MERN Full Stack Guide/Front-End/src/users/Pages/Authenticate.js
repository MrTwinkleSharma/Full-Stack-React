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

function Authenticate (){
    const [loginMode, setloginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
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


    const authSubmitHandler = async (event) =>{
        event.preventDefault();
        if(loginMode){

            try{
                setIsLoading(true);
                const response =  await fetch('http://localhost:5000/api/users/login', {
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json; charset=UTF-8"
                    },
                    body:JSON.stringify({
                        email:currentStateOfInput.inputs.email.value,
                        password:currentStateOfInput.inputs.password.value
                    })
                });
                const responseData = await response.json();
                setIsLoading(false);
                if(!response.ok)
                {
                    throw Error(responseData.message);
                }
                auth.login();
            }
            catch(err){
                setIsLoading(false);  
                setError(err.message || 'Something Went Wrong!');
            }
        }
        else{          

            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:5000/api/users/signup', {
                method:'POST',
                headers:{
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body:JSON.stringify({
                    name:currentStateOfInput.inputs.name.value,
                    email:currentStateOfInput.inputs.email.value,
                    password:currentStateOfInput.inputs.password.value
                    })
                });
                
                const responseData = await response.json();
                setIsLoading(false);
                if(!response.ok)
                {
                    throw Error(responseData.message);
                }
            }
            catch(err){
                setIsLoading(false);  
                setError(err.message || 'Something Went Wrong!');      
            }
        }
    }  
    const errorHandler = ()=>{
        setError(null);
    }
    return <>
    { error &&
     <ErrorModal onClear={errorHandler} error={error}/> 
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

            <Button disabled={!currentStateOfInput.isFormValid}>{  !loginMode && 'Register'} {  loginMode && 'Login'} </Button>
            <Button onClick={switchHandler}>Switch to {  loginMode && 'SignUp'} {  !loginMode && 'Login'} Mode</Button>
    
    </form>
    </Card>
    </>
}
export default Authenticate;

