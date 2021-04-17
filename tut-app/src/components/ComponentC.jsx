import React, { useContext } from 'react';
import {UserContext1,UserContext2} from './App';


function ComponentC (){
        const myName =  useContext(UserContext1);
        const iAm = useContext(UserContext2);
        
        return <>
        This is the 3rd Level Nested Component !
        <h3>I am {myName}, a {iAm}.</h3>
                                                
        <h6>Note: "Mr. Twinkle Sharma" Coming from UserContext1 and "Full Stack Developer" from its Child UserContext2. </h6>
        </>
}

export default ComponentC;

