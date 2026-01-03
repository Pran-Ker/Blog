import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>YOUR BLOG</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
