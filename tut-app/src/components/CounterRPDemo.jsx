import React, { Component } from "react";

class CounterRPDemo extends Component{
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

    render(){
    return <>
       <div>{this.props.children(this.state.count, this.eventHandler)}</div>
        </>
    }
}
    
export default CounterRPDemo;

