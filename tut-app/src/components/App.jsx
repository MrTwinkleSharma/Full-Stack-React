import React, { useContext } from 'react';
import ComponentA from './ComponentA';

const UserContext = React.createContext();

function App(){

        return <>
        <UserContext.Provider value = "Mr Twinkle Sharma">
                <ComponentA/>
        </UserContext.Provider>
        </>
}

export default App;
export {UserContext}; //Or you can export from just before const keyword