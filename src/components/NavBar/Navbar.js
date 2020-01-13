/* jshint ignore:start */
import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from "./showApp.PNG"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
              <NavLink to="/"> 
                <img src={logo} alt="ShowApp" />
              </NavLink> 
            </div>
            <div className="links">
              <NavLink to='/movies'> Movies</NavLink>
              <NavLink to='/series'>Series</NavLink>
              <NavLink to='/favorites'>Favorites </NavLink>  
            </div>
        </nav>
    );
};

export default Navbar;