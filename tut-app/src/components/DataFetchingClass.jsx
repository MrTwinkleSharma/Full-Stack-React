import React, { Component } from 'react';
import axios from 'axios';

class DataFetchingClass extends Component{
    constructor(props){
        super(props);
        this.state ={  
         post:{},
         id:1,
         changed:false
        }
    }

    componentDidMount(){ 
        let url='https://jsonplaceholder.typicode.com/posts/';
        url+=(this.state.id);
        
        console.log(url);
        axios.get(url)
        .then(response => {
            console.log(response);
            this.setState({post:response.data})
        })
        .catch(error=> console.log(error))
    }
    componentDidUpdate(prevProps,prevState){
    if(this.state.changed){
        this.setState({changed:false})
        let url='https://jsonplaceholder.typicode.com/posts/';
        url+=(this.state.id);
        
        console.log(url);
        axios.get(url)
        .then(response => {
            console.log(response);
            this.setState({post:response.data})
        })
        .catch(error=> console.log(error))

    }
    }

    render(){
        return  <> <h1>Fetched Data</h1>
        <span>Enter Id Number: 
            <input type='text' name="id" value={this.state.id} onChange={(event)=>this.setState({id: event.target.value})}/>
        </span>
        <button onClick={()=>this.setState({changed:true})}>Show Data</button>
        <h2>
        
        <div>Showing Id Number {this.state.id}</div>
        
        <div key={this.state.id}> {this.state.post.title} </div>
        </h2>
    </>
    }
   
}


export default DataFetchingClass;