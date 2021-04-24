import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import Users from './users/Pages/Users';
import MainNavigation from './shared/Components/Navigation/MainNavigation';

function App (){

  return <Router>
  <MainNavigation/>
  <main>
  <Switch>
    <Route path="/" exact>
    
    </Route>
    <Route path="/users" exact>  
      <Users/>
    </Route>
    <Route path="/login" exact>
      
    </Route>    
    <Redirect to='/' />
  </Switch>
  </main>
  </Router>
}
export default App;