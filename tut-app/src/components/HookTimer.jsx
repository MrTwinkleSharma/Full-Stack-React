import React, { useRef, useEffect, useState} from 'react';


function HookTimer(){
       
      const myRef = useRef()
      const[timer, setTimer] = useState(0);

      const incrementFunc  = () =>{
            setTimer(prevtimer => prevtimer+1);
      }
      
      useEffect(() => {
           myRef.current =  setInterval(incrementFunc, 1000)
            return ()=>{
                  clearInterval(myRef.current);
            }
        }, []);
        
        return <>
        <h1>Timer is: {timer}</h1>

        <button onClick={ ()=> clearInterval(myRef.current)}>Stop Timer</button>
        </>
}

export default HookTimer;