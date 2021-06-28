//3rd Party Modules
import React from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

//Local Modules
import Users from './users/Pages/Users';
import MainNavigation from './shared/Components/Navigation/MainNavigation';
import UserPlaces from './places/Pages/UserPlaces';
import NewPlace from '../src/places/Pages/NewPlace.js'
import UpdatePlace from './places/Pages/UpdatePlace';
import Authenticate from './users/Pages/Authenticate';
import AuthContext from  './shared/Context/auth-context';

//CSS Files
import './index.css';
import useAuth from './shared/util/authHook';

function App (){

  const {token, userId, login, logout} = useAuth();

  let routes;
  if(token){    
    routes = (<Switch>
      <Route path="/" exact>
      </Route>
  
      <Route path="/places/users/:userId" exact>
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
  
      <Redirect to='/users' />
    </Switch>)
  }
  else{
    routes = (<Switch>
      <Route path="/" exact>
      </Route>

      <Route path="/auth" exact>
        <Authenticate/>
      </Route>
      
      <Route path="/places/users/:userId" exact>
        <UserPlaces/>
      </Route>

      <Route path="/users" exact>  
        <Users/>
      </Route>
        
      <Redirect to='/auth' />
    </Switch>)

  }
  return <Router>
  <AuthContext.Provider value={{isLoggedIn:!!token,token:token , userId:userId, login:login, logout:logout}}>
  <MainNavigation/>
  <main>
  {routes}
  </main>
  </AuthContext.Provider>
  </Router>
}


export default App;