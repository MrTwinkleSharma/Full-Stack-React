import React from 'react';
import ComponentA from './ComponentA'

export const UserContext1 = React.createContext();
export const UserContext2 = React.createContext();
function App(){

        return <>
        <UserContext1.Provider value = "Mr Twinkle Sharma">
                <UserContext2.Provider value = "Full Stack Developer">
                        <ComponentA/>
                </UserContext2.Provider>
        </UserContext1.Provider>
       
        </>
}

export default App;

