import React, { Component } from 'react';
import axios from 'axios';

class APICallDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            userid:'',
            data:'',
            body:''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error=> {
            console.log(error);
        })
    }
    

    render(){
        
    return <>
    <h1>Enter Data to Submit through POST</h1>
    <form onSubmit={this.submitHandler}>
        <div>
            User Id: 
            <input type="text" name='userid' value={this.state.userid} onChange={this.changeHandler}/>
        </div>
        <div>
            Data:
            <input type="text" name='data' value={this.state.data} onChange={this.changeHandler}/>
        </div>
        <div>
            Body:
            <input type="text" name='body'datavalue={this.state.body} onChange={this.changeHandler}/>
        </div>
    <button type="submit">Submit</button>
    </form>
    </>
    }

}
export default APICallDemo;

