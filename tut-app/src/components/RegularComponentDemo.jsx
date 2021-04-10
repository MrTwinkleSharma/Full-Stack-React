import React, { Component } from 'react';


class RegularComponentDemo extends Component{   

    constructor(props)
    {
        super(props);
       
        this.state = {
            name: "Twinkle"
        }
    }
    componentDidMount (){
    
        setInterval(()=>{
            this.setState(
                {
                    name: "Twinkle"
                }
            )
        }, 
        2000);
    }
    
    render(){
        console.log("RegularComponentDemo render called!");
       return <div>RegularComponentDemo</div>;
      }
}

export default RegularComponentDemo;
