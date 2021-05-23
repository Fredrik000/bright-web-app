import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import SecondaryBtn from './UI/SecondaryBtn';

function Navbar() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
  return (
    <header className='navbar'>
      <Link to='/'>
        <img
          className='navbar-img'
          src='./images/logo/bright-logo.png'
          alt='Bright Logo'
        ></img>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <SecondaryBtn onClick={logoutHandler}>Logout</SecondaryBtn>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
