import React from 'react';
import {UserContext} from './App';


function ComponentC (){

        return <>
        This is the 3rd Level Nested Component !
        <UserContext.Consumer>      
                {
                        myName =>{
                                 return <h3>This "{myName}" coming from its supermost parent via context</h3>
                        }
                }
        </UserContext.Consumer>
        </>
}

export default ComponentC;

