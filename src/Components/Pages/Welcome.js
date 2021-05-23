import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';

function Welcome(props) {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header>
        <h1>Watch videos</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='welcome'>
        {authCtx.isLoggedIn && (
          <Link to='/report'>
            <Card>
              <h1>Report repairs</h1>
              <img src='' alt='report' />
              <p>Small explantation detaling what this is for </p>
            </Card>
          </Link>
        )}

        <Link to='/videos'>
          <Card>
            <h1>Watch repair videos</h1>
            <img src='' alt='videos' />
            <p>Small explantation detaling what this is for </p>
          </Card>
        </Link>
        <Link to='/manuals'>
          <Card>
            <h1>Read or print repair manuals</h1>
            <img src='' alt='manuals' />
            <p>Small explantation detaling what this is for </p>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
