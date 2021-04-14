import React, { Component } from 'react';
import axios from 'axios';

class APICallDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            jsonlist:[],
            error:null
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode1.com/posts')
        .then(response => {
            this.setState({
                jsonlist:response.data
            })
        })
        .catch(error=> {
            console.log(error);
            this.setState({
                error:"Error Retrieving Data :("
            })
        })
    }

    render(){
        const {jsonlist,error} = this.state
    return <>
    <h1>
        List of Fetched Data
    </h1>
    <div>{
    jsonlist.length ?
        jsonlist.map( data => <div key={data.id} > {data.body}</div>  ): null
    }
    {
        error ? this.state.error :null  
    }
    </div>

    </>
    }

}
export default APICallDemo;

