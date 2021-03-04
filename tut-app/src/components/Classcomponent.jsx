import React, { Component } from 'react';

class consoleClick extends Component{
    
    clickHandler(){
        console.log("Button Clicked");
        
    }
    render()
    {   
        return(
        <>
        <h1>Hey there! I am a Class Component</h1>

        <h2>My Task is to Print the message on console for Every Click on Button </h2>
        <button onClick =  {this.clickHandler}> Click Me</button>
        </>
        )
    }
}

export default consoleClick;