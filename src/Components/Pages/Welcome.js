import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

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
          <Card>
            <h1>Report repairs</h1>
            <img className={'cardImg'} src='' alt='report' />
            <p>Small explantation detaling what this is for </p>
            <Link to='/report'>
              <PrimaryBtn className='blue'>Video</PrimaryBtn>
            </Link>
          </Card>
        )}

        <Card>
          <h1>Watch repair videos</h1>
          <img className={'cardImg'} src='' alt='videos' />
          <p>Small explantation detaling what this is for </p>
          <Link to='/videos'>
            <PrimaryBtn className='blue'>Video</PrimaryBtn>
          </Link>
        </Card>
      </div>
    </>
  );
}

export default Welcome;
