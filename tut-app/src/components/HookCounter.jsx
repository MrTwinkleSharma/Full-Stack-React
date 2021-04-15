import React, { useState } from 'react';


function HookCounter () {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);    
    
   function incrementTwo(){
        // setCount(count+2); //This will Work Fine

        //This will Not
        // for(let i = 0;i<2;i++){
        //     setCount(count+1);
        // }

        for(let i = 0;i<2;i++){
            setCount(prevCount => prevCount+1);
        }
    }


    return <>
    <div>Clicked {count} Times!</div>
    <span>
        <button onClick = {()=>setCount(count-1)}>Decrement One</button>
        <button onClick = {incrementTwo}>Increment Two </button>
        <button onClick = {()=>setCount(count+1)}>Increment One</button>
        <button onClick = {()=>setCount(initialCount)}>Reset Counter</button>
    </span>
    </>
}


export default HookCounter;