import React, { Component } from 'react';
import axios from 'axios';

class APICallDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            jsonlist:[]
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                jsonlist:response.data
            })
        })
        .catch(error=> {
            console.log(error);
        })
    }

    render(){
        const {jsonlist} = this.state
    return <>
    <h1>
        List of Fetched Data
    </h1>
    <div>{
    jsonlist.length ?
        jsonlist.map( data => <div key={data.id} > {data.body}</div>  ): null
    }
    </div>
    </>
    }

}
export default APICallDemo;

