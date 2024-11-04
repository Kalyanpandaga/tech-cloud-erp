import React from 'react';
import '../styles/Header.css';
import { FaHeadset, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="top-bar">
        <div className="left-section">
          <FaHeadset className="icon" />
          <span className="help-text">Need Help? +123 500 555 012</span>
        </div>
        <div className="logo">LOGO</div>
        <div className="right-section">
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="nav-bar">
        <ul className="nav-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#journal">Journal</a></li>
          <li><a href="#lookbook">Lookbook</a></li>
          <li><a href="#pages">Pages</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
