import React, { useState } from 'react';

const styleObj = {
    marginRight : 'auto',
    marginLeft:'auto'
};
function Functioncomponent() {
    let currentTime = new Date().toLocaleTimeString();

    const [stateObj, setState] = useState(currentTime);

    function ChangeTime() {
        let newCurrentTime = new Date().toLocaleTimeString();
        setState(newCurrentTime);
    }
    
    setInterval(ChangeTime,1000);

    return (
        <div style={stateObj}>
        <h1>Digital Clock</h1>
        <h1>{currentTime}</h1>
        </div>
        )


}

export default Functioncomponent;