import React, { useState,useEffect } from 'react';

//Step 1. Firstly create a state variable with useState
//Step 2. Then do sideeffect using useEffect, takes a param (function), which will be executed at each render 
function UpdateTitleFunc () {
    
    const [titleCount, setTitleCount] = useState(0);

    const [extraVar, setextraVar] = useState(0);
  
    useEffect(
        ()=>{

            console.log("Document Title Update from Function!");       
            document.title=`Clicked ${titleCount} Times`
        }
    )
   
    return <>    
        <button onClick={()=> {setextraVar(extraVar => extraVar+1)}}>Change a State Variable</button>
        <button onClick={()=> {setTitleCount(titleCount => titleCount+1)}}>Increment with Functional Component</button>
    </>
}


export default UpdateTitleFunc;