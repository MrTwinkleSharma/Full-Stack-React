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
        return this.state.isLoggedIn ? 
        (<h1>Welcome User!!</h1>) 
        :(<h1>Please Log In or Create Account </h1>) 

    }
}

export default ConsoleClick;