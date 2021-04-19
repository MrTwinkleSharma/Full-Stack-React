import React from 'react';

function Button(props){

        console.log(`Rendering Button ${props.stateVar}`);
        return <>
       <button onClick={props.event}>Increment {props.stateVar}</button>
        </>
        
}

export default Button;
