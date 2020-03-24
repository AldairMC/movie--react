/* jshint ignore:start */
import React, { Component } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from "./showApp.PNG"

class Navbar extends Component {

  handlerMovie = (evt) => {
    this.props.setMovie(evt.target.text)
  }

  handlerSerie = (evt) => {
    this.props.setSerie(evt.target.text)
  }

  handlerHome = (evt) => {
    let home = '/'
    this.props.setHome(home)
  }

  render() {
    return (
      <div className="nave">
        <header className="header">
          <NavLink className="" to="/">
            <img onClick={(evt) => this.handlerHome(evt)} src={logo} alt="ShowApp" />
          </NavLink>
          {/* <div className="logo">
            <img src={logo} alt="ShowApp" />
          </div> */}
          <nav>
            <ul>
              <li onClick={(evt) => this.handlerMovie(evt)}><NavLink className="anchor" to='/movies'>Movies</NavLink></li>
              <li onClick={(evt) => this.handlerSerie(evt)}><NavLink className="anchor" to='/series'>Series</NavLink></li>
              <li><NavLink className="anchor" to='/favorites'>Favorites </NavLink></li>
            </ul>
          </nav>
          <div className="menu-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;


// const Navbar = () => {

 

//   return (
    
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
//   );
// };

// export default Navbar
