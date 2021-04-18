import React, { useReducer } from 'react';

const initialState = {
        counter:0
};

const reducer = (currentState, action) => {

        // console.log(action);
        switch(action.type)
        {
                case 'Increment':
                        // console.log(currentState);
                        return {counter : currentState.counter + action.value}
                        // console.log(currentState);
                        // return currentState;
                case 'Decrement':
                        // console.log(currentState);
                        return {counter : currentState.counter - action.value}
                        // console.log(currentState);
                        // return currentState;
                case 'Reset':
                        return initialState;
                default:
                        return currentState;
        }

      
}

function UseReducerDemo(){

        const [currentState, dispatch] = useReducer(reducer, initialState);
        
        // console.log(currentState);

        return<>
        {/* <h1>{JSON.stringify(currentState)}</h1> */}
        <h3>Current Counter is {currentState.counter}</h3>
        <button onClick={()=>{dispatch({type:'Increment',value:1})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'Decrement',value:1})}}>Decrement</button>

        <button onClick={()=>{dispatch({type:'Reset'})}}>Reset</button>

        <div>
        <button onClick={()=>{dispatch({type:'Increment',value:5})}}>Increment 5</button>
        <button onClick={()=>{dispatch({type:'Decrement',value:5})}}>Decrement 5</button>
        </div>
        </>
}

export default UseReducerDemo;

