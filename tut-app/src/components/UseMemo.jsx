import React, { useMemo, useState} from 'react';


function UseMemo(){
       
        const[counterOne,setCounterOne] = useState(0);
        const [counterTwo, setCounterTwo] = useState(0);

        const isEven = () => {
                // let i = 0;
                // while (i<2000000000) i++;
                return counterOne%2===0;
        };

        
        return <>
        <span> Counter One - {counterOne} {isEven() ? "Even" : "Odd"} <button onClick={()=>setCounterOne(prevState=>prevState+1)}>Increment</button> </span>
        <hr/>
        <span> Counter Two - {counterTwo} <button onClick={()=>setCounterTwo(prevState=>prevState+1)}>Increment</button> </span>
        </>
        
}

export default UseMemo;
