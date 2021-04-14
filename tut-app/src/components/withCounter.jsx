import React, { Component } from "react";

const withCounter = (WrappedComponent, additionalParam) => {

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
                    count: prevState.count+additionalParam
                }
            })
        }

        render(){
        
        // console.log(this.props.randomprops);  //this is not undefined here 
        return <>
            <WrappedComponent count={this.state.count} eventHandler={this.eventHandler} {...this.props}/>
            </>
        }
        //we have passed remaining props back to clickHandler through spread operator 
    }
    return withCounter;
}


export default withCounter;

