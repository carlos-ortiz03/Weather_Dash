import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({handleNavClick}) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/search" className="nav-item">Search</Link>
        <Link to="/about" className="nav-item">About</Link>
      </ul>
    </nav>
  );
}

export default NavBar;