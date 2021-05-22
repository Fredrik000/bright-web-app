import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';

function Welcome(props) {
  return (
    <>
      <Header>
        <h1>Watch videos</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='welcome'>
        <Link to='/report'>
          <Card>
            <h1>Report repairs</h1>
            <img src='' alt='report' />
            <p>Small explantation detaling what this is for </p>
          </Card>
        </Link>
        <Link to='/learningportal'>
          <Card>
            <h1>Learning portal</h1>
            <img src='' alt='learning portal' />
            <p>Small explantation detaling what this is for </p>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
