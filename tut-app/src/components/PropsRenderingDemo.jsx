import React, { Component } from 'react';

class PropsRenderingDemo extends Component {   
    
    render(){

        console.log(this.props);
    return <>
        {/* <div> {this.props.myname1} </div> */}
        {/* <div> {this.props.myname2()} </div> */}
        {/* <div> {this.props.myname3(true)} </div> */}
        </>
    }

}
export default PropsRenderingDemo;

