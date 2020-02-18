/* jshint ignore:start */
import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from "./showApp.PNG"

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="home" to="/">
        <img src={logo} alt="ShowApp" />
      </NavLink>
      <div className="links">
        <span>
          <NavLink className="seccion" to='/movies'> Movies</NavLink>
          <NavLink className="seccion midd" to='/series'>Series</NavLink>
          <NavLink className="seccion" to='/favorites'>Favorites </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
