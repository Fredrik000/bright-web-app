import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Login() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className='login' onSubmit={onSubmitHandler}>
      <h1>Welcome!</h1>
      <p> Small explanation detailing what this is for</p>
      <input type='text' name='usernameInp' placeholder='Username'></input>
      <input type='password' name='passwordInp' placeholder='Password'></input>
      <Link to='/Welcome'>
        <PrimaryBtn type='submit'>Submit</PrimaryBtn>
      </Link>
    </form>
  );
}
export default Login;
