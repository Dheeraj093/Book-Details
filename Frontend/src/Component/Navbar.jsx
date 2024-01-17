import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">BookPage</Link>
        </li>
        <li className="navbar-item">
          <Link to="/addBook" className="navbar-link">Add Book</Link>
        </li>
        <li className="navbar-item">
          <Link to="/externalBooks" className="navbar-link">External Books</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
