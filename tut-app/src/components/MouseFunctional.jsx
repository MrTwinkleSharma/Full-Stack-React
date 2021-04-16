import React, { useState,useEffect } from 'react';

function MouseFunctional () {
    
    const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0
        }
    );
    

    const logMousePosition = (event) => {
        setMousePosition ({
            x: event.clientX,
            y: event.clientY
        })
    }
    useEffect(
        ()=>{
        console.log("Event Listener added (Functional)!")
        window.addEventListener('mousemove', logMousePosition);     
        
        return ()=>{window.removeEventListener('mousemove', logMousePosition)}
        }
    ,[]);   
        
    return <div>X - {mousePosition.x}<br/> Y- {mousePosition.y}</div>
}


export default MouseFunctional;