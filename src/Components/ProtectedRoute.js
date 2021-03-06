import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
