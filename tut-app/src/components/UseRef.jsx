import React, { useRef, useEffect} from 'react';


function UseRef(){
       
     
        const myInputRef = useRef(null);

        //this function call is for only once when the component gets mounted into DOM
        useEffect(() => {
              myInputRef.current.focus();
        }, []);
        
        return <>
        <input type="text" ref={myInputRef}/>
        </>
        
}

export default UseRef;
