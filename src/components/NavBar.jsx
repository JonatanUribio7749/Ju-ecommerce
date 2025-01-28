import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./NavBar.css";
import logo from "../assets/electro-logo.png";

const NavBar = () => {
  const { totalItems } = useCart(); // ✅ Ahora usamos totalItems()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          <img src={logo} alt="Electro X Logo" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-button" activeclassname="active">
          Inicio
        </NavLink>
        <NavLink to="/category/electronica" className="nav-button" activeclassname="active">
          Electrónica
        </NavLink>
        <NavLink to="/category/ropa" className="nav-button" activeclassname="active">
          Ropa
        </NavLink>
        <NavLink to="/category/accesorios" className="nav-button" activeclassname="active">
          Accesorios
        </NavLink>
        <NavLink to="/cart" className="nav-button" activeclassname="active">
          Carrito 🛒 ({totalItems()}) {/* ✅ Usamos totalItems() */}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;



