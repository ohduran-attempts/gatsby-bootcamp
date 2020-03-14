import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div>
      <h1>Alvaro</h1>
      <ul>
        <li><Link exact to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header;
