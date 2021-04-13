import React, { Component } from "react";
import UpdatedComponent from './higherOrderComponent.jsx';

class HOCDemo extends Component{
    render(){
    return <div>{this.props.str} | Before Part is Updated</div>;
    }
}

export default UpdatedComponent(HOCDemo);

