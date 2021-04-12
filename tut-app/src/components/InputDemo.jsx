import React, { Component } from 'react';


class InputDemo extends Component{   
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }   
    
    focusInput()
    {
        this.myRef.current.focus();
        console.log(this.myRef);
    }
    render(){
        return <>
        <div>InputDemo</div>        
        <input type = 'text' ref = {this.myRef} />
         </>
      }
}

export default InputDemo;
