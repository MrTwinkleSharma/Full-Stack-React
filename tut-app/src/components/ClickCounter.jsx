import React, { Component } from "react";
import UpdatedComponent from './withCounter.jsx';

class ClickCounter extends Component{
  
    render()
    {
    const {count,eventHandler} = this.props;
    return <>
     <div>This is the Example of ClickCounter</div>
     <button onClick={eventHandler}> Button Clicked {count} Times!</button>  
     </> 
    }
}
export default UpdatedComponent(ClickCounter);

