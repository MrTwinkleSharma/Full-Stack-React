import React from 'react';
import ReactDOM from 'react-dom';

//import css file with a relative path & everything remains same
import './index.css'; 

var greet,greetcolor,backgroundColor;
var d = new Date();
var n = d.getHours();

if(n<12)
{
  greet = 'Morning';
  greetcolor = 'yellow';
  backgroundColor = '#fc5947';
}
else if(n>=12 && n<17)
{
  greet = 'Afternoon';
  greetcolor = 'red';
  backgroundColor = '#406cff';
  
}
else 
{
  greet = 'Evening';
  greetcolor = 'green';
  backgroundColor = '#fc477a';

}


ReactDOM.render(
  <>
  <h1 id = 'header' style={{color:greetcolor, backgroundColor:backgroundColor}}>Good {greet}</h1>
  <h2 id = 'about'> I am Twinkle Sharma, Sophomore at Computer Science & Engineering</h2>
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
