import { React, useContext, useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'Components/ProtectedRoute';
import AuthContext from 'store/auth-context';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Login from 'Components/Pages/Login';
import Welcome from 'Components/Pages/Welcome';
import Manuals from 'Components/Pages/Manuals';
import Report from 'Components/Pages/Report';
import LearningPortal from 'Components/Pages/LearningPortal';
import UserProfile from 'Components/Pages/UserProfile';
import Video from 'Components/Pages/Video';

function App() {
  const authCtx = useContext(AuthContext);
  const [productId, setProductId] = useState(0);

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
          <Route path='/videos' exact>
            <LearningPortal setProductId={setProductId}/>
          </Route>
          <Route path='/video' exact>
            <Video productId={productId}/>
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
      <Footer />
    </>
  );
}
export default App;
