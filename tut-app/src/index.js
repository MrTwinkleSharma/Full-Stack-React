import React from 'react';
import ReactDOM from 'react-dom';

// Don't Forget 
// 1. Convert kebab-case to camelCase
// 2. Pass Object inside style={}
// 3. {} means here is something javascript expression
ReactDOM.render(
  <>
  <h1 style = {{color:'#d23e4d',textTransform:'capitalize'}}>Hi There, I am Twinkle Sharma</h1>
  <h2 style={{fontFamily:'"Lucida Console", "Courier New", "monospace"' ,textDecoration:'underline',color:'rgb(5, 93, 255)'}}>I am a Sophomore at Computer Science & Engineering</h2>
  <div style={{border:'5px solid black', padding:'3px 10px'}}>
  <h2>I want to be a Software Developer Engineer in Future</h2>
  <h2>My Skills are:-</h2>
  <ul>
    <li>Web Development</li>
    <li>Core Java & C++ </li>
    <li>OOPs & DBMS</li>
    <li>Git & Graphics Designing</li>
  </ul>
  </div>
  </>, document.getElementById('root')
);
