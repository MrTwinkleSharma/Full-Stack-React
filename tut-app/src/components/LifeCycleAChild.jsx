import React, { Component } from 'react';

class LifeCycleAChild extends Component{   

    constructor(props)
    {
        super(props);
        console.log("LifeCycleAChild constructor called!");
        this.state = {
            name: "Twinkle"
        }
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log("LifeCycleAChild getDerivedStateFromProps called!");
        return null;
    }

    componentDidMount (){
        console.log("LifeCycleAChild componentDidMount called!");
        
    }
    render(){
        console.log("LifeCycleAChild render called!");
       return <div>LifeCycleAChild</div>
        
    }
}

export default LifeCycleAChild;
