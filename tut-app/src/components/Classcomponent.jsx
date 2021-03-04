import React, { Component } from 'react';

class ConsoleClick extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }
    clickHandler(){
        console.log("Button Clicked " , this.state.counter , " Times.");
        let i = this.state.counter;
        i++;
        this.setState( {counter : i} );
        
    }
    render()
    {   
        return(
        <>
        <h1>Hey there! I am a Class Component</h1>

        <h2>My Task is to Print the message on console for Every Click on Button </h2>

        <button onClick =  {this.clickHandler.bind(this)}> Click Me</button>
        </>
        )
    }
}

export default ConsoleClick;