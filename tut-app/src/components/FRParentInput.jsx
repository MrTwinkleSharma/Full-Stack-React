import React, { Component } from 'react';
import FRInput from './FRInput.jsx';

class FRParentInput extends Component{   
    constructor(props)
    {
        super(props);
        this.forwardingRef = React.createRef();
    }   
    
    
    clickHandler = () => {
        this.forwardingRef.current.focus();
    }
    render(){
        return <>
        <FRInput ref = {this.forwardingRef}></FRInput>
        <button onClick = {this.clickHandler}>Focus Input</button>
        </>
      }
}

export default FRParentInput;
