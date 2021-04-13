import React, { Component } from 'react';
import ClickCounter from './ClickCounter.jsx';
import HoverCounter from './HoverCounter.jsx';

class App extends Component {
   
    
    render(){
    return <>
            <ClickCounter/>
            <hr/>
            <HoverCounter/>            
        </>
    }

}
export default App;

