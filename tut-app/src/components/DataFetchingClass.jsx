import React, { Component } from 'react';
import axios from 'axios';

class DataFetchingClass extends Component{
    constructor(props){
        super(props);
        this.state ={  
         posts:[]
        }
    }

    componentDidMount(){ 
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response);
            this.setState({posts:response.data})
        })
        .catch(error=> console.log(error))
    }
    
    render(){
        return  <> <h1>Fetched Data</h1>
        <ul> 
            {   
                this.state.posts.length ?
                this.state.posts.map((element)=> <li key={element.id}> {element.title} </li>)
                : null
            }
        </ul>
    </>
    }
   
}


export default DataFetchingClass;