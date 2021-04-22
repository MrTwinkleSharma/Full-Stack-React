import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App (){

  return <Router>
  <Route path="/" exact>
    <h1>Home Page </h1>
    <div>This will get rendered on <b>localhost:3000/ </b></div>
  </Route>
  <Route path="/users" exact>
    <h1>Users Page </h1>
    <div>This will get rendered on <b>localhost:3000/users </b></div>
  </Route>
  </Router>
}
export default App;