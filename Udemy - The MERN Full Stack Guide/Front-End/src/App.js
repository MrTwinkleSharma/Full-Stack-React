//3rd Party Modules
import React, {useState, useCallback} from 'react';
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

function App (){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;

  if(isLoggedIn){
    
    routes = (<Switch>
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
      
      <Route path="/places/:placeId" exact>
        <UpdatePlace/>
      </Route>    
  
      <Redirect to='/' />
    </Switch>)
  }
  else{
    routes = (<Switch>
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
        
      <Redirect to='/' />
    </Switch>)

  }
  return <Router>
  <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
  <MainNavigation/>
  <main>
  {routes}
  </main>
  </AuthContext.Provider>
  </Router>
}


export default App;