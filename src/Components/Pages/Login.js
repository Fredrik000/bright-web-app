import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Login(props) {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Validation
    if (enteredEmail.trim() === '' && enteredPassword.trim() === '') {
      setEnteredEmailIsValid(false);
      setEnteredPasswordIsValid(false);
      return;
    } else if (enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false);
      return;
    } else if (enteredPassword.trim() === '') {
      setEnteredPasswordIsValid(false);
      return;
    }
    setIsLoading(true);
    setEnteredPasswordIsValid(true);
    setEnteredPasswordIsValid(true);

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCobvg1vKK83g536cUukr51CqxIJun1cBc',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: authCtx.token,
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Transform JSON response into JS object
      const data = await response.json();

      // We are no longer fetching data, and must update state accordingly
      setIsLoading(false);

      // Error handling on response
      if (!response.ok) {
        let errorMessage = 'Authentication failed!';

        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          throw new Error(errorMessage);
        }
      }

      // Get expiration time in seconds from API, convert to ms and add to current timestamp
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, enteredEmail, expirationTime.toISOString());
      history.replace('/');
    } catch (err) {
      setError(err.message);
      if (err.message === 'EMAIL_NOT_FOUND') {
        setEnteredEmailIsValid(false);
        setEnteredPasswordIsValid(true);
      } else if (err.message === 'INVALID_PASSWORD') {
        setEnteredPasswordIsValid(false);
        setEnteredEmailIsValid(true);
      }
    }
  };

  // Make input field red if not validated
  const emailInputClass = enteredEmailIsValid
    ? 'form-group'
    : 'form-group invalid';

  const passwordInputClass = enteredPasswordIsValid
    ? 'form-group'
    : 'form-group invalid';

  // Content that is displayed on screen
  let content = <p>Please fill out form and click "Submit"</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Form className='login' onSubmit={submitHandler}>
      <h1>Welcome!</h1>
      {content}
      <div className={emailInputClass}>
        <input
          type='text'
          id='email'
          placeholder='Email'
          required
          ref={emailInputRef}
        />
        <label htmlFor='email'>Email</label>
      </div>
      <div className={passwordInputClass}>
        <input
          type='password'
          id='password'
          placeholder='Password'
          required
          ref={passwordInputRef}
        />
        <label htmlFor='password'>Password</label>
      </div>
      {!isLoading && (
        <PrimaryBtn className='blue' type='submit'>
          Login
        </PrimaryBtn>
      )}
      {isLoading && <p>Sending request...</p>}
    </Form>
  );
}
export default Login;
