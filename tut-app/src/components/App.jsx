import React, { Component } from 'react';
import ClickCounter from './ClickCounter.jsx';
import HoverCounter from './HoverCounter.jsx';

import PropsRenderingDemo from './PropsRenderingDemo.jsx';


class App extends Component {
   
    
    render(){
    return <>
        {/* Simple Props Rendering */}
        {/* <PropsRenderingDemo myname1="Mr. Twinkle Sharma"/> */}

        {/* Functional(returns the prop) Props Rendering */}
        {/* <PropsRenderingDemo myname2={() => 'Mr. Twinkle Sharma'}/> */}

        {/* Functional(returns based on params) Props Rendering */}
        {/* <PropsRenderingDemo myname3={(isLoggedIn) => isLoggedIn ? 'Mr. Twinkle Sharma' : 'Sign In'}/> */}


        </>
    }

}
export default App;

