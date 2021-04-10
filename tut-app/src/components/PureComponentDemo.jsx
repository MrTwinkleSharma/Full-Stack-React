import React, { PureComponent } from 'react';

class PureComponentDemo extends PureComponent{   

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
        console.log("Pure Component render called!");
       return <div>PureComponentDemo</div>
        
    }
}

export default PureComponentDemo;
