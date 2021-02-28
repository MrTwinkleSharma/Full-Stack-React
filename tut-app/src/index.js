import React from 'react';
import ReactDOM from 'react-dom';

// Import component here
import {Myname} from "./components/Myname";
import  Greet from "./components/Greet";

ReactDOM.render( <> <Greet name="Mr. Tiwari"/>
  <h2>and</h2>
  <Greet name="Mr. Tripathi">This is a Child of component</Greet>
  <Myname/>  
  </>
  ,document.getElementById('root')
);

