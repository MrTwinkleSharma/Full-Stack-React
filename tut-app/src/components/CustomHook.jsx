import React, { useState } from 'react';
import useDocumentTitle from './Custom Hooks/useDocumentTitle';

function CustomHook(){

       const [count, setCount] = useState(0);
       useDocumentTitle(count);

       return<>
       <button onClick={()=>setCount(count+1)}>Count {count}</button>
       </> 
}

export default CustomHook;

