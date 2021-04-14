import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
    render(){
        
    return <>
        <hr/>
        <div>Third Level Nested Component being Rendered!</div>
        <UserConsumer>
            {
                (contextValue) => {
                    return <div>Hello {contextValue}</div>
                }
            }
        </UserConsumer>
        <br/>
        <div>This "Mr. Twinkle Sharma" came from React.createContext(), without passing props.</div>
        
        <hr/>
        </>
    }

}
export default ComponentF;

