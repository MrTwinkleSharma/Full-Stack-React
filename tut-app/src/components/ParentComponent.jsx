import React, { Component } from 'react';
import PureComponentDemo from './PureComponentDemo.jsx';
import RegularComponentDemo from './RegularComponentDemo.jsx';

class ParentComponent extends Component{   

    constructor(props)
    {
        super(props);
       
        this.state = {
            name: "Twinkle"
        }
    }
    
    render(){
        console.log("ParentComponent render called!");
       return <>
       <PureComponentDemo/>
       <RegularComponentDemo/>
       </>
      }
}

export default ParentComponent;
