// NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/electro-logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
        <img src={logo} alt="Electro X Logo" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/category/electronica" className="nav-button">
          Electrónica
        </NavLink>
        <NavLink to="/category/ropa" className="nav-button">
          Ropa
        </NavLink>
        <NavLink to="/category/accesorios" className="nav-button">
          Accesorios
        </NavLink>
        <NavLink to="/cart" className="nav-button">
          Carrito 🛒
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;


