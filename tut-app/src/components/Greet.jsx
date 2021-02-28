import React from 'react';

// const Greet = props => <h1>Hello {props.name}!</h1>;

function Greet(props)
{
    // console.log(props);
    return  (
    <>
    <h1>Hello {props.name}</h1>
    <h2>{props.children}</h2>
    </>     );
}

export default Greet;