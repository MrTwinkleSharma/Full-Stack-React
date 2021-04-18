import React, {useContext} from 'react';
import {CountContext} from './App';

function ComponentF (){

    const {count,dispatch} = useContext(CountContext);
    return <>
    <span>
    <div> 3rd Level:- Component F</div>
    <button>Counter {count}</button>
    <button onClick={()=>dispatch('increment')}>Increment</button>
    </span>
    </>
}

export default ComponentF;

