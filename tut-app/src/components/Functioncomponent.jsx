import React from 'react';

let i = 0;
function clickHandler(){
    let str = `Button is Clicked ${i++} times.`;
    console.log(str);
    
}

function ConsoleClick(){
    return (
        <>
        <h1>Hey there! I am a Functional Component</h1>
        <h2>My Task is to Print the message on console for Every Click on Button </h2>
        <button onClick =  {clickHandler}> Click Me</button>
        </>

    )
}


export default ConsoleClick ;