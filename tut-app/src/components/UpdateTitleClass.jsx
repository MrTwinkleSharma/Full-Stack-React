import React, { Component } from 'react';

class UpdateTitleClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            titleCount:0
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.titleCount} Times`;
    }

    componentDidUpdate(){
        document.title = `Clicked ${this.state.titleCount} Times`;
    }
    
    render(){
        
    return <>    
    <button onClick= {()=>{this.setState({titleCount:this.state.titleCount+1})}}>Increment with Class Component</button>
        
    </>
    

    }
   
}


export default UpdateTitleClass;