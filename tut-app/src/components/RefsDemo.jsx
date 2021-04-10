import React, { Component } from 'react';


class RefsDemo extends Component{   
    constructor(props)
    {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount()
    {
        this.myRef.current.focus();
        console.log(this.myRef);
    }
    clickHandler = () => {
        alert(this.myRef.current.value);
    }

    
    render(){
        console.log("RefsDemo render called!");
       return <>
       <div>RefsDemo</div>
       <span>Name: </span>
       <input type = 'text' ref = {this.myRef} />
       <button onClick = {this.clickHandler}>Submit</button>
        </>
      }
}

export default RefsDemo;
