import React, { Component } from 'react';

class Classcomponent extends Component{
    
    constructor(){
        super();
        this.state = {
            name :'',
            age: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeNameHandler(event) {
        this.setState({name : event.target.value});
    }
    changeAgeHandler(event) {
       this.setState({age : event.target.value});
                
    }
    submitHandler(event){
        let aString = "";
        if(this.state.age >= 18){
            aString = "you can proceed to this website";
        }

        else{
            aString = "you are below 18 hence you can't go ahead";
        }
        alert(
            `Hey ${this.state.name} your age is ${this.state.age}, ${aString}`
        );
        event.preventDefault(); //To prevent reloading of page on each Submission
    }


    render(){
        const {name, age} = this.state;
        return (
        <>
        <h1>Hi, I am a Form Component</h1>
        <form onSubmit = {this.submitHandler}>
        <label>
            <h3>Enter Your Name</h3>
        <input type='text' value={name} onChange={this.changeNameHandler} />
        </label>
        <label>
            <h3>Enter Your Age</h3>
        <input type='text' value={age} onChange={this.changeAgeHandler} />
        </label>
        <button type = "submit">Submit</button>
        </form>
        </>
        
        )
    }
}

export default Classcomponent;
