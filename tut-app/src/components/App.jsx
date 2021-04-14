import React, { Component } from 'react';
import ClickCounter from './ClickCounter.jsx';
import HoverCounter from './HoverCounter.jsx';
import CounterRPDemo from './CounterRPDemo.jsx';


class App extends Component {
   
    
    render(){
    return <>
    <CounterRPDemo >
        {(count, incrementCounter)=> 
        <ClickCounter count = {count} eventHandler={incrementCounter}>

        </ClickCounter>}
    </CounterRPDemo>
    <hr/>
    <CounterRPDemo>
        {(count, incrementCounter)=> 
        <HoverCounter count = {count} eventHandler={incrementCounter}>

        </HoverCounter>}

    </CounterRPDemo>
    </>
    }

}
export default App;

