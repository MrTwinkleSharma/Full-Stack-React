import React, { Component } from "react";
import withCounter from './withCounter.jsx';

class ClickCounter extends Component{
  
    render()
    {
    // console.log(this.props.randomprops);  //will remain undefined till HOC gives as props
    const {count,eventHandler} = this.props;
    return <>
     <div>{this.props.randomprops}</div>
      <br/>
     <div>This is the Example of ClickCounter</div>
     
     <button onClick={eventHandler}> Button Clicked {count} Times!</button>  
     </> 
    }
}
export default withCounter(ClickCounter,5);

