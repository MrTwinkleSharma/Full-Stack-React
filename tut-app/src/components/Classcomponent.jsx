//Simple Class component to Say Hello to user

import React, { Component } from 'react';

class Classcomponent extends Component{
    constructor(){
        super();
        this.state = {
            myname:"Mr. Twinkle Sharma",
            iam : "Sophomore at Computer Science Engineering",
            message: "Do checkout my Website"
        }
    }
    changeState(){
    this.setState({message : "Thanks for visitng my Website"});
    document.getElementById('button').hidden = true;
    
    }
    render()
    {
        return (<>
        <h1>Hello there, Welcome to our Webpage!</h1>
        <h2>My name is {this.state.myname}</h2>
        <h2>I am {this.state.iam}</h2>
        <h2>{this.state.message}</h2>
        <a id="button" target="_blank" href="https://mrtwinklesharma.github.io/MrTwinkleSharma/Temp-Portfolio2/">
        <button onClick={()=>this.changeState()} >Website</button>
        </a>
        
        </>)
    }
}

export default Classcomponent;