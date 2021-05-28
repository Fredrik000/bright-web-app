import React, { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Login(props) {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const sumbitHandler = (e) => {
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

    fetch(
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
    )
      // Validation
      .then((res) => {
        setIsLoading();
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      // If validated -> get data
      .then((data) => {
        // Get expiration time in seconds from API, convert to ms and add to current timestamp
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
        if (err.message === 'EMAIL_NOT_FOUND') {
          setEnteredEmailIsValid(false);
          setEnteredPasswordIsValid(true);
        } else if (err.message === 'INVALID_PASSWORD') {
          setEnteredPasswordIsValid(false);
          setEnteredEmailIsValid(true);
        }
      });
  };

  // Make input field red if not validated
  const emailInputClass = enteredEmailIsValid
    ? 'form-group'
    : 'form-group invalid';

  const passwordInputClass = enteredPasswordIsValid
    ? 'form-group'
    : 'form-group invalid';

  return (
    <Form className='login' onSubmit={sumbitHandler}>
      <h1>Welcome!</h1>
      <p> Small explanation detailing what this is for</p>
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
        <Link to='/report'>
          <PrimaryBtn className='blue' type='submit' onClick={sumbitHandler}>
            Login
          </PrimaryBtn>
        </Link>
      )}
      {isLoading && <p>Sending request...</p>}
    </Form>
  );
}
export default Login;
