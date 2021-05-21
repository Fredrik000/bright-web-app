import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from 'Components/Navbar';
import Login from 'Components/Login';
import Welcome from 'Components/Welcome';
import Report from 'Components/Report';
import Videos from 'Components/Videos';

function App() {
  return (
    <>
      <Navbar />
      <Route path='/Login'>
        <Login />
      </Route>
      <Route path='/Welcome'>
        <Welcome />
      </Route>
      <Route path='/Videos'>
        <Videos />
      </Route>
      <Route path='/Manuals'>
        <Videos />
      </Route>
      <Route path='/Report'>
        <Report />
      </Route>
    </>
  );
}
export default App;
