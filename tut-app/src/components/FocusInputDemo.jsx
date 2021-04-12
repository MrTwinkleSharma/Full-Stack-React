import React, { Component } from 'react';
import InputDemo from './InputDemo.jsx';

class FocusInputDemo extends Component{   
    constructor(props)
    {
        super(props);
        this.componentRef = React.createRef();
    }   
    
    
    clickHandler = () => {
        this.componentRef.current.focusInput();
    }
    render(){
        return <>
        <InputDemo ref = {this.componentRef}></InputDemo>
        <button onClick = {this.clickHandler}>Focus Input</button>
        </>
      }
}

export default FocusInputDemo;
