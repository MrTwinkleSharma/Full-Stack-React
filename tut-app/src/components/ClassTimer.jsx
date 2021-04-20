import React, {Component} from 'react';


class ClassTimer extends Component {
      //Declaring a class variable in ES6
      interval
      constructor(props)
      {
            super(props)
            this.state = {
                  timer:0
            }
      }

      componentDidMount(){
            this.interval = setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)
      }
      componentWillUnmount(){
            clearInterval(this.interval);
      }
      render(){
            return <>
            <h1>Timer is: {this.state.timer}</h1>
            <button onClick={ ()=> clearInterval(this.interval)}>Stop Timer</button>
            </>
      }

}

export default ClassTimer;