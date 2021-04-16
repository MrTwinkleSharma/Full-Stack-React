import React, { Component } from 'react';

class SetIntervalClass extends Component{
    constructor(props){
        super(props);
        this.state ={  
         count:0   
        }
    }

    componentDidMount(){
       this.IntervalFunction =  setInterval( () => {
            this.setState({count:this.state.count+1})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.IntervalFunction);
    }
    render(){        
    return  <> <h1>Current Counter is {this.state.count} </h1> 
    <h5>*This will keep incrementing on each 1 seconds*</h5> </>
    }
   
}


export default SetIntervalClass;