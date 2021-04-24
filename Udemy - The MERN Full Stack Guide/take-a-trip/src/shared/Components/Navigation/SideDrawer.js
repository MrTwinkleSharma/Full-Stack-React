import React from 'react'
import ReactDOM from 'react-dom';

import './SideDrawer.css';

function SideDrawer (props){
    
    return ReactDOM.createPortal(
        <aside className='side-drawer'>{props.children}</aside>
        ,document.getElementById('drawer'));
}
export default SideDrawer;