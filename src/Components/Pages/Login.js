import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Login(props) {
  const loginHandler = (e) => {
    props.setIsLoggedIn(true);
  };

  return (
    <div className='login'>
      <h1>Welcome!</h1>
      <p> Small explanation detailing what this is for</p>
      <input type='text' name='usernameInp' placeholder='Username'></input>
      <input type='password' name='passwordInp' placeholder='Password'></input>

      <Link to='/report'>
        <PrimaryBtn type='submit' onClick={loginHandler}>
          Submit
        </PrimaryBtn>
      </Link>
    </div>
  );
}
export default Login;
