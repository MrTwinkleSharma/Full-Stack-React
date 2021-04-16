import React from 'react';
import DataFetchingClass from './DataFetchingClass';
import DataFetchingFunctional from './DataFetchingFunctional';

function App(){

        return <>
        <div> Class Component </div>
        <DataFetchingClass/>
        <hr/>

        <div> Functional Component </div>
        <DataFetchingFunctional/>
        </>
}

export default App;

