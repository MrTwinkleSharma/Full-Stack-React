import React, { useState } from 'react';

function Functioncomponent() {
   
    const [stateObj, setState] = useState(0);

    function ClickHandler() {
        setState(stateObj+1);
    }


    return (
        <>
        <h1>Hey there! I am a Functional Component</h1>
        <h2>My Task is to Display State for every click Event.</h2>
        <h2>Button Clicked {stateObj} Times.</h2>
        <button onClick =  {ClickHandler}> Click Me</button>
        </>
        )


}

export default Functioncomponent;