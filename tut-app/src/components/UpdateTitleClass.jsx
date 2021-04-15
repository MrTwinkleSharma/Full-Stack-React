import React, { Component } from 'react';

class UpdateTitleClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            titleCount:0,
            extraVar:0
        }
    }

    componentDidMount(){
        document.title = `Clickesd ${this.state.titleCount} Times`;
    }

    componentDidUpdate(){
        console.log("Document Title Update from Class!");
        document.title = `Clicked ${this.state.titleCount} Times`;
    }
    
    render(){
        
    return <>    
    <button onClick= {()=>{this.setState({extraVar:this.state.extraVar+1})}}>Change a State Variable</button>
    <button onClick= {()=>{this.setState({titleCount:this.state.titleCount+1})}}>Increment with Class Component</button>
        
    </>
    

    }
   
}


export default UpdateTitleClass;