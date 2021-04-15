import React, { useState } from 'react';


function UseStateArray () {
    
    const [myArr, setArr] = useState([]);   
    
    const addItems = () =>{
        setArr([...myArr, {
            id:myArr.length,
            num: Math.floor(Math.random() * 11)    // returns a random integer from 0 to 10
        }]);
    }

    return <>
    <span>
    <h2>List of Items <button onClick={addItems}>Add a Item</button></h2>
    </span>
    {
        myArr.map( (element)=>{return <div key={element.id}>{element.num}</div>} )
    }
    
    </>
}


export default UseStateArray;