import React, { Component } from 'react';
import axios from 'axios';

class DataFetchingClass extends Component{
    constructor(props){
        super(props);
        this.state ={  
         post:{},
         id:1,
         idForRender:1
        }
    }

    componentDidMount(){ 
        let url='https://jsonplaceholder.typicode.com/posts/';
        url+=(this.state.idForRender);
        
        console.log(url);
        axios.get(url)
        .then(response => {
            console.log(response);
            this.setState({post:response.data})
        })
        .catch(error=> console.log(error))
    }
    componentDidUpdate(prevProps,prevState){
    if(prevState.idForRender!==this.state.idForRender){
        
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
        <button onClick={()=>this.setState({idForRender:this.state.id})}>Show Data</button>
        <h2>
        
        <div>Showing Id Number {this.state.idForRender}</div>
        
        <div key={this.state.idForRender}> {this.state.post.title} </div>
        </h2>
    </>
    }
   
}


export default DataFetchingClass;