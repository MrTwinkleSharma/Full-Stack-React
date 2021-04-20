import React from 'react';
import useInput from './Custom Hooks/useInput';

function CustomHook(){

       console.log(useInput());
       const [firstName, inputFirstName ] = useInput();
       const [lastName, inputLastName ] = useInput();
     
       return<>
       <span> <div>First Name:</div> <input type='text' {...inputFirstName}></input></span>
       <span> <div>Last Name:</div> <input type='text' {...inputLastName}></input></span>
       </> 
}

export default CustomHook;

