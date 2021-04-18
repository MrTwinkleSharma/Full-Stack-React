import React, { useContext } from 'react';
import {CountContext} from './App';

function ComponentA(){
        const {count,dispatch} = useContext(CountContext);

        return <>
        <br/>
        <span>          
        <button>Counter {count}</button>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        </span>        
        </> 

}

export default ComponentA;
