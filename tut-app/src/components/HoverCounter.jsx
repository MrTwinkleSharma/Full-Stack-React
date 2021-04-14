import React, { Component } from "react";
import withCounter from './withCounter.jsx';

class HoverCounter extends Component{

    render()
    {
        const {count,eventHandler} = this.props;
        return <>
        <div>This is the Example of HoverCounter</div>
        <button onMouseOver={eventHandler} >Button Hovered {count} Times!</button>  
        </> 
    }
}
export default withCounter(HoverCounter,10);

