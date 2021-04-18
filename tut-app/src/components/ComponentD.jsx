import React, {useContext} from 'react';
import {CountContext} from './App';

function ComponentD (){

        const {count,dispatch} = useContext(CountContext);
        return <>
        <span>
        <div> 2nd Level:- Component D</div>
        <button>Counter {count}</button>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        </span>
        </>
}

export default ComponentD;

