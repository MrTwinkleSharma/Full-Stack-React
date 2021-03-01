//Simple Class component to Say Hello to user

import React, { Component } from 'react';

class Classcomponent extends Component{
    render()
    {
        return <h1>Hello {this.props.userName}, Welcome to our Webpage!</h1>
    }
}

export default Classcomponent;