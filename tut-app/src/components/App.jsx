import React, { Component } from 'react';
import PortalsDemo from "./PortalDemo.jsx";

class App extends Component {
    clickHandler = ()=>{
        console.log("Button Clicked");
    }

    render(){

    return  <div onClick={this.clickHandler}>
            <PortalsDemo />   
            </div>
    }

}
export default App;

