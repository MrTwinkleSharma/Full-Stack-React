import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import Users from './users/Pages/Users';
import MainNavigation from './shared/Components/Navigation/MainNavigation';
import UserPlaces from './places/Pages/UserPlaces';
import NewPlace from '../src/places/Pages/NewPlace.js'
function App (){

  return <Router>
  <MainNavigation/>
  <main>
  <Switch>
    <Route path="/" exact>
    </Route>

    <Route path="/:userId/places" exact>
      <UserPlaces/>
    </Route>
    <Route path="/users" exact>  
      <Users/>
    </Route>
    <Route path="/places/new" exact>
      <NewPlace/>
    </Route>    
    <Redirect to='/' />
  </Switch>
  </main>
  </Router>
}
export default App;