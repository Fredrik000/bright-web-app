import { React, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'Components/ProtectedRoute';
import AuthContext from 'store/auth-context';
import Navbar from 'Components/Navbar';
import Login from 'Components/Pages/Login';
import Welcome from 'Components/Pages/Welcome';
import Manuals from 'Components/Pages/Manuals';
import Report from 'Components/Pages/Report';
import LearningPortal from 'Components/Pages/LearningPortal';
import UserProfile from 'Components/Pages/UserProfile';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='welcome' />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/welcome' exact>
            <Welcome />
          </Route>
          <Route path='/learningportal' exact>
            <LearningPortal />
          </Route>
          <Route path='/manuals' exact>
            <Manuals />
          </Route>
          <ProtectedRoute
            path='/report'
            exact
            Component={Report}
            isLoggedIn={authCtx.isLoggedIn}
          />
          <ProtectedRoute
            path='/profile'
            exact
            Component={UserProfile}
            isLoggedIn={authCtx.isLoggedIn}
          />
        </Switch>
      </main>
    </>
  );
}
export default App;
