import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundaryDemo.jsx';
import MainComponent from './MainComponent.jsx';

class App extends Component {
   
    
    render(){
    return <>
            <ErrorBoundary>
                <MainComponent istrue="Yes"/>
            </ErrorBoundary>
            <ErrorBoundary>
                <MainComponent istrue="No"/>
            </ErrorBoundary>
            <ErrorBoundary>
                <MainComponent istrue="Yes"/>
            </ErrorBoundary>
        </>
    }

}
export default App;

