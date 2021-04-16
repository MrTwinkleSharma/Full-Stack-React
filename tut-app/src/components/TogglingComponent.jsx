import React, { useState } from 'react';

import MouseClass from './MouseClass.jsx';
import MouseFunctional from './MouseFunctional.jsx';



function TogglingComponent () {
  
    const [display, setDisplay] = useState(true);
    return <>  
    <button onClick={()=>{setDisplay(false)}}>Toggle Mouse Co-ordinates </button>
    {
        (display) && <MouseFunctional/>
    }
    </>
}
export default TogglingComponent;