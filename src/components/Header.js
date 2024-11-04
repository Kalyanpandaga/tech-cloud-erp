import React from 'react';
import './Header.css'; // Add your custom styles

const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/collection">Collection</a></li>
          <li><a href="/journal">Journal</a></li>
          <li><a href="/pages">Pages</a></li>
        </ul>
      </nav>
      <div className="icons">
        <span>🛒</span>
        <span>🔍</span>
        <span>❤️</span>
      </div>
    </header>
  );
};

export default Header;
