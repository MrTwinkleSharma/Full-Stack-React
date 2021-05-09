import { useState } from "react";

function useCounter(intialCount = 0, value){
  
    const [count , setCount ] = useState(intialCount);
   
    const increment = () =>{
        setCount(prevCount => prevCount + value);

    }
    const decrement = () =>{
        setCount(prevCount => prevCount - value);

    }
    const reset = () => {
        setCount(intialCount);

    }
    return [count, increment, decrement, reset];

}

export default useCounter;

