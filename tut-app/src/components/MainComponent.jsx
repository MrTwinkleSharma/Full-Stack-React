import React, { Component } from "react";

class MainComponent extends Component{
    render()
    {
        if(this.props.istrue == "No") throw new Error("No is Received!");
        return <div >SuccessFull Rendered!</div>;
        
    }
}
export default MainComponent;

