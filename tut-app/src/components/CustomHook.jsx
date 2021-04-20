import React from 'react';
import useCounter from './Custom Hooks/useCounter';

function CustomHook(){

       const [count, increment, decrement, reset] = useCounter(0,1);
     
       return<>
       <h1>Count is {count}</h1>
       <button onClick={increment}> Increment </button>
       <button onClick={decrement}> Decrement </button>
       <button onClick={reset}> Reset </button>
       </> 
}

export default CustomHook;

