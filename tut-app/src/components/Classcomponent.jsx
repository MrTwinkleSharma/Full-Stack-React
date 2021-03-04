import React, { Component } from 'react';

class ConsoleClick extends Component{
    constructor(){
        super();
        this.state = {
           sampleArray : ["Shubham", "Shubhankar", "Navrachit", "Shashwat", "Nimish", "Hrithik", "Sabeel"]
        }
    }
    
    render()
    {   
        const MyMappedArray = this.state.sampleArray.map(elem => <div>{elem}</div> );
        return  <>{MyMappedArray}</>
    }
}

export default ConsoleClick;