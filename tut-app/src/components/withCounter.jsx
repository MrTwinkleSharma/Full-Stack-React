import React, { Component } from "react";

const withCounter = WrappedComponent => {

    class withCounter extends Component{
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
            <WrappedComponent count={this.state.count} eventHandler={this.eventHandler}/>
            </>
        }
    }
    return withCounter;
}


export default withCounter;

