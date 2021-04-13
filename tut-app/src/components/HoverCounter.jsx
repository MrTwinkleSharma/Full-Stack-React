import React, { Component } from "react";

class HoverCounter extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0
        };
        
    }
   
    eventHandler = () => {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }

    render()
    {
        return <>
        <div>This is the Example of HoverCounter</div>
        <button onMouseOver={this.eventHandler} >Button Hovered {this.state.count} Times!</button>  
        </> 
    }
}
export default HoverCounter;

