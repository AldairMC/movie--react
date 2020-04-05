import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import { NavLink } from 'react-router-dom';
import logo from "./showApp.PNG"

export default function Header(props) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1080px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handlerMovie = (evt) => {
    props.setMovie(evt.target.text)
  }

  const handlerSerie = (evt) => {
    props.setSerie(evt.target.text)
  }

  const handlerHome = () => {
    let home = '/'
    props.setHome(home)
  }

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="home" onClick={() => handlerHome()} alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <NavLink className="seccion" onClick={(evt) => handlerMovie(evt)} to='/movies'> Movies</NavLink>
          <NavLink className="seccion" onClick={(evt) => handlerSerie(evt)} to='/series'>Series</NavLink>
          <NavLink className="seccion" to='/favorites'>Favorites </NavLink>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="menu-toggle">
        <span>
          <i className="fas fa-bars"></i>
        </span>
      </button>
    </header>
  );
}
