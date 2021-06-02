import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import SecondaryBtn from './UI/SecondaryBtn';
import logoImg from 'images/bright-logo.png';

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
        <img src={logoImg} alt='Bright Logo'></img>
      </Link>

      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <SecondaryBtn onClick={logoutHandler}>Logout</SecondaryBtn>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Navbar;
