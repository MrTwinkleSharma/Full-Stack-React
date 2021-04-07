import React, { Component } from 'react';

class LifeCycleA extends Component{   

    constructor(props)
    {
        super(props);
        console.log("LifeCycleA constructor called!");
        this.state = {
            name: "Twinkle"
        }
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log("LifeCycleA getDerivedStateFromProps called!");
        return null;
    }

    componentDidMount (){
        console.log("LifeCycleA componentDidMount called!");
        
    }
    render(){
        console.log("LifeCycleA render called!");
       return <div>LifeCycleA</div>
        
    }
}

export default LifeCycleA;
