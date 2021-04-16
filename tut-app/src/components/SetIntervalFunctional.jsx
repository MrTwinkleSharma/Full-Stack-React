import React, { useState,useEffect } from 'react';

function SetIntervalFunctional () {
    
    const [count, setCount] = useState(0);
    
    useEffect(
        ()=>{

    function IncrementCount(){
        setCount(count+1) //Or use prevCount based Increment to avoid dependency
    }
            const IntervalFunction = setInterval( IncrementCount,1000)            
        return ()=> clearInterval(IntervalFunction);
        }
    , [count]);

    
    return  <> <h1>Current Counter is {count} </h1> 
    <h5>*This will keep incrementing on each 1 seconds*</h5> </>
}

export default SetIntervalFunctional;