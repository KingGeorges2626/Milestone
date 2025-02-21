import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/categories">Catégories</Link></li>
        <li><Link to="/profile">Profil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;