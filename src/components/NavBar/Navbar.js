import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <NavLink to='/movies'> Movies </NavLink>
            <NavLink to='/series'> Series </NavLink>
            <NavLink to='/favorites'> Favorites </NavLink>
        </nav>
    );
};

export default Navbar;