import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  loggedInEmail: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredUserData = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');
  const storedEmail = localStorage.getItem('email');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    email: storedEmail,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const userData = retrieveStoredUserData();

  let initialToken;
  let initialEmail;
  if (userData) {
    initialToken = userData.token;
    initialEmail = userData.email;
  }

  const [token, setToken] = useState(initialToken);
  const [loggedInEmail, setLoggedInEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setLoggedInEmail('');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, loggedInEmail, expirationTime) => {
    setToken(token);
    setLoggedInEmail(loggedInEmail);
    localStorage.setItem('token', token);
    localStorage.setItem('email', loggedInEmail);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (userData) {
      console.log(`Remaining token duration: ${userData.duration}`);
      logoutTimer = setTimeout(logoutHandler, userData.duration);
    }
  }, [userData, logoutHandler]);

  const contextValue = {
    token: token,
    loggedInEmail: loggedInEmail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
