import React, { Component } from 'react';

class ConsoleClick extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn : true
        }
    }
    
    render()
    { 
        if(this.state.isLoggedIn)  
        return(
        <h1>Welcome User!!</h1>
        )
        else
        return (
            <h1>Please Log In or Create Account </h1>
        )
    }
}

export default ConsoleClick;