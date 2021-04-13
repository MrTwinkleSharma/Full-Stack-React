import React, { Component } from "react";

class ClickCounter extends Component{
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
     <div>This is the Example of ClickCounter</div>
     <button onClick={this.eventHandler}> Button Clicked {this.state.count} Times!</button>  
     </> 
    }
}
export default ClickCounter;

