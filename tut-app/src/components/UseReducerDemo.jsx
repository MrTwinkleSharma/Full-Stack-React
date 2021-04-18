import React, { useReducer } from 'react';

const initialState = {
        counter:0,
        counterClone:0

};

const reducer = (currentState, action) => {

        // console.log(action);
        switch(action.type)
        {
                case 'Increment':
                        // console.log(currentState);
                        return {...currentState, counter : currentState.counter + action.value}
                        // console.log(currentState);
                        // return currentState;
                case 'Decrement':
                        // console.log(currentState);
                        return {...currentState, counter : currentState.counter - action.value}
                        // console.log(currentState);
                        // return currentState;
                case 'Reset':
                        return {...currentState, counter: initialState.counter};

                case 'IncrementClone':
                        return {...currentState, counterClone : currentState.counterClone + action.value}
                case 'DecrementClone':
                        return {...currentState,counterClone : currentState.counterClone - action.value}
                case 'ResetClone':
                        return {...currentState, counterClone:initialState.counterClone};
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

        <hr/>

        <h3>Current Counter is {currentState.counterClone}</h3>
        <button onClick={()=>{dispatch({type:'IncrementClone',value:1})}}>IncrementClone</button>
        <button onClick={()=>{dispatch({type:'DecrementClone',value:1})}}>DecrementClone</button>
        <button onClick={()=>{dispatch({type:'ResetClone'})}}>ResetClone</button>

        
        </>
}

export default UseReducerDemo;

