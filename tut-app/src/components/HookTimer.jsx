import React, { useRef, useEffect, useState} from 'react';


function HookTimer(){
       

      const[timer, setTimer] = useState(0);

      const interval  = () =>{
            setTimer(prevtimer => prevtimer+1);
      }
      
      useEffect(() => {
            setInterval(interval, 1000)
            
        }, []);
        
        return <>
        <h1>Timer is: {timer}</h1>
        </>
}

export default HookTimer;