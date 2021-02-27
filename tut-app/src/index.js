import React from 'react';
import ReactDOM from 'react-dom';

//import css file with a relative path & everything remains same
import './index.css'; 

ReactDOM.render(
  <>
  <h1 id = 'header'>Hi There, I am Twinkle Sharma</h1>
  <h2 id = 'about'>I am a Sophomore at Computer Science & Engineering</h2>
  <div id = 'skills'>
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
