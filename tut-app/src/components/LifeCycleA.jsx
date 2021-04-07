import React, { Component } from 'react';
import LifeCycleAChild from './LifeCycleAChild.jsx';


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

   shouldComponentUpdate(nextProps, nextState){
    console.log("LifeCycleA shouldComponentUpdate called!");
   return true;    
   }
    
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("LifeCycleA getSnapshotBeforeUpdate called!");
        return  null;
    }
   componentDidUpdate(prevProps, prevState, snapshot)
   {
       console.log("LifeCycleA componentDidUpdate called!");
   }

    componentDidMount (){
        console.log("LifeCycleA componentDidMount called!");
        
    }
    changeState  = () => {
        this.setState({
            name: "Sharma"
        })
    }
    render(){
        console.log("LifeCycleA render called!");
       return <>
       <div>LifeCycleA</div>
       <div>State: {this.state.name}</div>
       <button onClick={this.changeState}>Change State</button>
       
       <LifeCycleAChild/>
       </> 
    }
}

export default LifeCycleA;
