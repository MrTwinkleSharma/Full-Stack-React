//3rd Party Modules
import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

//Local Modules
import AuthContext from '../../Context/auth-context';

//CSS Files
import './NavLinks.css';

function Navlinks(props){

    const auth = useContext(AuthContext);


    return <ul className='nav-links'>
    <li>
    <NavLink to='/users' exact> ALL USERS</NavLink>
    </li>
    { auth.isLoggedIn &&
        <li>
            <NavLink to='/:userId/places' >MY PLACES</NavLink>
        </li> 
    }
    { auth.isLoggedIn &&
        <li>
            <NavLink to='/places/new' >ADD PLACE</NavLink>
        </li> 
    }
    <li>
        <NavLink to='/auth' >AUTHENTICATE</NavLink>
    </li> 
    </ul>
}

export default Navlinks;