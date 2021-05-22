import { React, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'Components/ProtectedRoute';
import Navbar from 'Components/Navbar';
import Login from 'Components/Pages/Login';
import Welcome from 'Components/Pages/Welcome';
import Manuals from 'Components/Pages/Manuals';
import Report from 'Components/Pages/Report';
import Videos from 'Components/Pages/Videos';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='welcome' />
          </Route>
          <Route path='/login' exact>
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path='/welcome' exact>
            <Welcome />
          </Route>
          <Route path='/videos' exact>
            <Videos />
          </Route>
          <Route path='/manuals' exact>
            <Manuals />
          </Route>
          <ProtectedRoute
            path='/report'
            exact
            Component={Report}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </main>
    </>
  );
}
export default App;
