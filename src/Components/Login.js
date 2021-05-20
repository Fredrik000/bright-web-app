import React from 'react';

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
      <button type='submit'>Submit</button>
    </form>
  );
}
export default Login;
