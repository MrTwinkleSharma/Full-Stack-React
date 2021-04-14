import React, { Component } from 'react';
import UserContext from './UserContext';

// Not Here because ReferenceError: Cannot access 'ComponentF' before initialization 
// ComponentF.contextType = UserContext;

class ComponentF extends Component {
    static contextType = UserContext;  // 1st Way
    render(){
        
    return <>
        <hr/>
        <div>Third Level Nested Component being Rendered!</div>
        
        <div>Hello {this.context}</div>
        <br/>
        <div>This "Mr. Twinkle Sharma" came from Uppermost Parent, without passing props.</div>
        
        <hr/>
        </>
    }

}

// ComponentF.contextType = UserContext;   // 2nd Way
export default ComponentF;

