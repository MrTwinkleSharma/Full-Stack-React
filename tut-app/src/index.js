import React from 'react';
import ReactDOM from 'react-dom';

// Import component here
import Myname from "./components/Myname";

//Now <Myname> is our JSX element and we can use it anywhere.
ReactDOM.render( <Myname/>  
  ,document.getElementById('root')
);



/*
We call ReactDOM.render() with the <Myname> element.
React calls the Myname component
Our Myname component returns a <h1>My name is Twinkle Sharma !</h1> element as the result.
React DOM efficiently updates the DOM to match <h1>My name is Twinkle Sharma !</h1>.
*/