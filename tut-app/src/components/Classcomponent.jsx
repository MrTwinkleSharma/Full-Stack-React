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
                {
                    this.state.sampleArray.map(elem => <div>{elem}</div> )
                }
                </>
    }
}

export default ConsoleClick;