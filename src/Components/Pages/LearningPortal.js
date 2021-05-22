import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';

function LearningPortal() {
  return (
    <>
      <Header>
        <h1>Watch videos</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='welcome'>
        <Link to='/videos'>
          <Card>
            <h1>Watch repair videos</h1>
            <img src='' alt='videos' />
            <p>Small explantation detaling what this is for </p>
          </Card>
        </Link>
        <Link to='/manuals'>
          <Card>
            <h1>Read of print repair manuals</h1>
            <img src='' alt='manuals' />
            <p>Small explantation detaling what this is for </p>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default LearningPortal;
