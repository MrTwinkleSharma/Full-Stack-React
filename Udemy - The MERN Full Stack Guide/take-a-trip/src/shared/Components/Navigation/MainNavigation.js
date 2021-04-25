import React from 'react'
import {useState } from 'react'
import { Link } from 'react-router-dom';


import MainHeader from './MainHeader.js';
import SideDrawer from './SideDrawer.js';
import Navlinks from './NavLinks.js';
import BackDrop from '../UIElements/BackDrop.js'
import './MainNavigation.css'

function MainNavigation (props){

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }
    
    return <>
    {
        drawerIsOpen && <BackDrop onClick={closeDrawer}/>
    }
    { drawerIsOpen && 
    <SideDrawer>
        <nav className='main-navigation__drawer-nav'>
            <Navlinks/>
        </nav>
    </SideDrawer>
    }
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={()=>{setDrawerIsOpen(true)}}>
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className='main-navigation__title'>
            <Link to='/'> Your Places </Link>
        </h1>
        <nav className='main-navigation__header-nav'>
            <Navlinks/>
        </nav>
    </MainHeader>
    </>
}
export default MainNavigation;