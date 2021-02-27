import React from 'react';
import ReactDOM from 'react-dom';

// Don't Forget 
// 1. Convert kebab-case to camelCase
// 2. Pass Object inside style={}
// 3. {} means here is something javascript expression

const style1 = {color:'#d23e4d',textTransform:'capitalize'};
const style2 = {fontFamily:'"Lucida Console", "Courier New", "monospace"' ,textDecoration:'underline',color:'rgb(5, 93, 255)'};
const style3 = {border:'5px solid black', padding:'3px 10px'};
ReactDOM.render(
  <>
  <h1 style = {style1}>Hi There, I am Twinkle Sharma</h1>
  <h2 style = {style2}>I am a Sophomore at Computer Science & Engineering</h2>
  <div style = {style3}>
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
