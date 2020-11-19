import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav_links">
                <NavLink to="/profile" className="links">Profile</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to="/dialogs" className="links" >Massages</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to="/1" className="links" >News</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to="/2" className="links" >Music</NavLink>
            </div>
            <div className="nav_links">
                <NavLink to="/3" className="links" >About us</NavLink>
                
            </div>
        </div>
    )
}

export default Navbar
