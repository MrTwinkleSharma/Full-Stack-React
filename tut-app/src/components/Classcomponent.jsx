import React, { Component } from 'react';

class ConsoleClick extends Component{
    constructor(){
        super();
        this.state = {
           sampleArray : ["Shubham", "Shubhankar", "Navrachit", "Shashwat", "Nimish", "Hrithik", "Sabeel"]
        }
    }
    
    render()
    {   return  <>
                <div>{this.state.sampleArray[0]}</div>
                <div>{this.state.sampleArray[1]}</div>
                <div>{this.state.sampleArray[2]}</div>
                <div>{this.state.sampleArray[3]}</div>
                <div>{this.state.sampleArray[4]}</div>
                <div>{this.state.sampleArray[5]}</div>
                <div>{this.state.sampleArray[6]}</div>
                </>
    }
}

export default ConsoleClick;