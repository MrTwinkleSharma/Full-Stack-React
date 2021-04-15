import React from 'react';
import UpdateTitleFunc from './UpdateTitleFunc.jsx';
import UpdateTitleClass from './UpdateTitleClass.jsx';


//See Console for perfomance reduction through this approach 
function App(){

        return <>
        <UpdateTitleClass/>
        <hr/>
        <UpdateTitleFunc/>
        </>
}

export default App;

