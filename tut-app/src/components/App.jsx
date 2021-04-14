import React, { Component } from 'react';
import ComponentC from './ComponentC.jsx';
import {UserProvider} from './UserContext.jsx';


class App extends Component {
    render(){
    return <UserProvider value="Mr. Twinkle Sharma"> <ComponentC/> </UserProvider>
    }

}
export default App;

