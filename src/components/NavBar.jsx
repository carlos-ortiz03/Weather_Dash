import React from 'react';

const NavBar = ({handleNavClick}) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li onClick={(e) => handleNavClick(0)} className="nav-item">
            <h3>Dashboard</h3>
        </li>
        <li onClick={(e) => handleNavClick(1)} className="nav-item">
            <h3>Search</h3>
        </li>
        <li onClick={(e) => handleNavClick(2)} className="nav-item">
            <h3>About</h3>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;