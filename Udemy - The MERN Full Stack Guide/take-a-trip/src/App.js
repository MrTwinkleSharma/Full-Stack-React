import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

function App (){

  return <Router>
  <Switch>
    <Route path="/" exact>
      <h1>Home Page </h1>
      <div>This will get rendered on <b>localhost:3000/ </b> and <b>Default Redirecting</b> </div>
    </Route>
    <Route path="/users" exact>
      <h1>Users Page </h1>
      <div>This will get rendered on <b>localhost:3000/users </b></div>
    </Route>
    <Route path="/login" exact>
      <h1>Login Page </h1>
      <div>This will get rendered on <b>localhost:3000/login </b></div>
    </Route>    
    <Redirect to='/' />
  </Switch>
  </Router>
}
export default App;