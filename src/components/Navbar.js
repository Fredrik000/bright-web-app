import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='navbar'>
      <Link to='/'>
        <img
          className='navbar-img'
          src='./images/logo/bright-logo.png'
          alt='Bright Logo'
        ></img>
      </Link>
    </header>
  );
}

export default Navbar;
