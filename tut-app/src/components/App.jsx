import React, { Component } from 'react';
import ClickCounter from './ClickCounter.jsx';
import HoverCounter from './HoverCounter.jsx';
import HOCDemo from './HOCDemo.jsx';

class App extends Component {
   
    
    render(){
    return <>
            <HOCDemo /> 
            {/* <ClickCounter/>
            <hr/>
            <HoverCounter/>*/}
        </>
    }

}
export default App;

