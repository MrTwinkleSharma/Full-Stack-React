//3rd Party Modules
import React from 'react';
import { NavLink } from 'react-router-dom';

//CSS Files
import './NavLinks.css';

function Navlinks(props)
{

    return <ul className='nav-links'>
    <li>
    <NavLink to='/users' exact> ALL USERS</NavLink>
    </li>
    <li>
        <NavLink to='/:userId/places' >MY PLACES</NavLink>
    </li> 
    <li>
        <NavLink to='/places/new' >ADD PLACE</NavLink>
    </li> 
    <li>
        <NavLink to='/auth' >AUTHENTICATE</NavLink>
    </li> 
    </ul>
}

export default Navlinks;