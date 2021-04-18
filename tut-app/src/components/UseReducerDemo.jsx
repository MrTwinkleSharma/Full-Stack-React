import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (currentState, action) => {

        switch(action)
        {
                case 'Increment':
                        return currentState + 1;
                case 'Decrement':
                        return currentState - 1;
                case 'Reset':
                        return initialState;
                default:
                        return currentState;
        }
}

function UseReducerDemo(){

        const [currentState, dispatch] = useReducer(reducer, initialState);
        return<>
        <h3>Current Counter is {currentState}</h3>
        <button onClick={()=>{dispatch('Increment')}}>Increment</button>
        <button onClick={()=>{dispatch('Decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('Reset')}}>Reset</button>
        </>
}

export default UseReducerDemo;

