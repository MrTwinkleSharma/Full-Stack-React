import React from 'react';
import HookTimer from './HookTimer.jsx';
import ClassTimer from './ClassTimer.jsx';

function App(){

        return <>
        <div>Class Component!</div>
        <ClassTimer/>
        <hr/>
        <div>Functional Component!</div>
        <HookTimer/>
        </>
}

export default App;

