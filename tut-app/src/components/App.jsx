import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';



const initialState = 0;
export const CountContext = React.createContext();
const reducer = (currentState, action) => {

        switch(action)
        {
                case 'increment':
                        return currentState + 1;
                case 'decrement':
                        return currentState - 1;
                case 'reset':
                        return initialState;
                default:
                        return currentState;
        }
}

function App(){

        const [count, dispatch] = useReducer(reducer, initialState);
        return <>
        <div>App Component</div>
        <CountContext.Provider value = {{count:count, dispatch:dispatch}}>
                <hr/>
                        1st Level:- Component A
                        <ComponentA/>
                <hr/>
                        1st Level:- Component B
                        <ComponentB/>
                <hr/>
                        1st Level:- Component C
                        <ComponentC/>
                <hr/>
        </CountContext.Provider>
       </>
}

export default App;

