import React from 'react';
import {UserContext1,UserContext2} from './App';


function ComponentC (){

        return <>
        This is the 3rd Level Nested Component !
        <UserContext1.Consumer>      
                {
                        myName =>{                                
                                return  <UserContext2.Consumer>
                                        {                                        
                                                iAm => {
                                                        return <h3>I am {myName}, a {iAm}.</h3>
                                                }
                                        }
                                 </UserContext2.Consumer>
                        }
                }
        </UserContext1.Consumer>
        <h6>Note: "Mr. Twinkle Sharma" Coming from UserContext1 and "Full Stack Developer" from its Child UserContext2. </h6>
        </>
}

export default ComponentC;

