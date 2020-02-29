/* jshint ignore:start */
import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from "./showApp.PNG"

const Navbar = () => {
  return (

    <div class="nave">
      <header class="header">
        <div class="logo">
          <img src={logo} alt="ShowApp" />
        </div>
        <nav>
          <ul>
            <li><NavLink className="a" to='/movies'> Movies</NavLink></li>
            <li><NavLink className="a" to='/series'>Series</NavLink></li>
            <li><NavLink className="a" to='/favorites'>Favorites </NavLink></li>
          </ul>
        </nav>
        <div class="menu-toggle">
          <i class="fas fa-bars"></i>
        </div>
      </header>
    </div>
    // <nav className="navbar">
    //   <NavLink className="home" to="/">
    //     <img src={logo} alt="ShowApp" />
    //   </NavLink>
    //   <div className="links">
    //     <span>
    //       <NavLink className="seccion" to='/movies'> Movies</NavLink>
    //       <NavLink className="seccion midd" to='/series'>Series</NavLink>
    //       <NavLink className="seccion" to='/favorites'>Favorites </NavLink>
    //     </span>
    //   </div>
    // </nav>
  );
};

export default Navbar;
