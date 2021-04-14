import React, { Component } from 'react';
import ClickCounter from './ClickCounter.jsx';
import HoverCounter from './HoverCounter.jsx';

const str = "I am Passing Props in Original Component(ClickCounter) which is going to be Updated through HOC";

class App extends Component {
   
    
    render(){
    return <>
            <ClickCounter randomprops={str}/>
            <hr/>
            <HoverCounter/>
        </>
    }

}
export default App;

