import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function LearningPortal(props) {
  return (
    <>
      <Header>
        <h1>Learning Portal</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='products'>
        <Card>
          <img src='placeholder' alt='Product-img' />
          <div>
            <h1>Sunbell</h1>
            <p>Small explantation detaling what this is for </p>
          </div>
          <div>
            <Link to='/'>
              <PrimaryBtn className='blue'>Video</PrimaryBtn>
            </Link>
            <Link to='/manuals'>
              <PrimaryBtn className='green'>Manual</PrimaryBtn>
            </Link>
          </div>
        </Card>
        <Card className='video'>
          <img src='placeholder' alt='Product-img' />
        </Card>
        <Card className='video'>
          <img src='placeholder' alt='Product-img' />
        </Card>
        <Card className='video'>
          <img src='placeholder' alt='Product-img' />
        </Card>
        <Card className='video'>
          <img src='placeholder' alt='Product-img' />
        </Card>
      </div>
    </>
  );
}

export default LearningPortal;
