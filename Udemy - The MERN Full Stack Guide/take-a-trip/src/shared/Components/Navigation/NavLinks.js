import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/newplace' >ADD PLACE</NavLink>
    </li> 
    <li>
        <NavLink to='/auth' >AUTHENTICATE</NavLink>
    </li> 
    </ul>
}

export default Navlinks;