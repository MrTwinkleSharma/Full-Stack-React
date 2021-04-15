import React, { useState } from 'react';


function HookCounter () {
    
    const [myObj, setObj] = useState({
        firstName:"",
        lastName:"",
        age:""
    });    
    
    return <>
    <div>First Name: 
    <input type="text" value={myObj.firstName} onChange={(event)=>setObj({...myObj, firstName :event.target.value})}/>
    </div>
    <div>Last Name: 
    <input type="text" value={myObj.lastName} onChange={(event)=>setObj({...myObj,lastName :event.target.value})}/>
    </div>
    <div>Age: 
    <input type="text" value={myObj.age} onChange={(event)=>setObj({...myObj,age: event.target.value})}/>
    </div>
    <h1> My Name is {myObj.firstName} {myObj.lastName}, I am {myObj.age} years old.</h1>
    </>
}


export default HookCounter;