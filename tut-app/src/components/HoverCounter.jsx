import React, { Component } from "react";
import UpdatedComponent from './withCounter.jsx';

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
export default UpdatedComponent(HoverCounter);

