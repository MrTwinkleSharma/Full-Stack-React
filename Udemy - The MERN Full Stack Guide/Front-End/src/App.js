import React from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

import Users from './users/Pages/Users';
import MainNavigation from './shared/Components/Navigation/MainNavigation';
import UserPlaces from './places/Pages/UserPlaces';
import NewPlace from '../src/places/Pages/NewPlace.js'

import './index.css';
import UpdatePlace from './places/Pages/UpdatePlace';
import Authenticate from './users/Pages/Authenticate';

function App (){

  return <Router>
  <MainNavigation/>
  <main>
  <Switch>
    <Route path="/" exact>
    </Route>
    <Route path="/auth" exact>
      <Authenticate/>
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
    
    <Route path="/places/:placeId" exact>
      <UpdatePlace/>
    </Route>    

    <Redirect to='/' />
  </Switch>
  </main>
  </Router>
}


export default App;