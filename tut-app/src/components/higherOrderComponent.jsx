import React, { Component } from "react";

const UpdatedComponent = OriginalComponent => {

    class NewComponent extends Component{

        render(){
        return <>
            <OriginalComponent str="Component gets Updated by HOC :)"/>
            </>
        }
    }
    return NewComponent;
}


export default UpdatedComponent;

