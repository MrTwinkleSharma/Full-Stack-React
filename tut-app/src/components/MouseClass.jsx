import React, { Component } from 'react';

class MouseClass extends Component{
    constructor(props){
        super(props);
        this.state ={  
            x:0,
            y:0,
            
        }
    }
    logMousePosition = (event) => {
        this.setState({
            x: event.clientX, 
            y: event.clientY
        }) 
    }

    componentDidMount(){
        console.log("Event Listener added (Class)!")
        window.addEventListener('mousemove', this.logMousePosition)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition);
    }
    
    
    render(){
        
    return  <div>X - {this.state.x}<br/> Y- {this.state.y}</div>   

    }
   
}


export default MouseClass ;