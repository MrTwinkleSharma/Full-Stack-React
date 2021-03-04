import React, { Component } from 'react';

class ConsoleClick extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn : false
        }
    }
    
    render()
    { 
        let message;
        if(this.state.isLoggedIn)  
            message = <h1>Welcome User!!</h1>;
        
        else
            message = <h1>Please Log In or Create Account </h1>
        
        return message;
    }
}

export default ConsoleClick;