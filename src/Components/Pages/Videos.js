import React from 'react';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';

function Videos() {
  return (
    <>
      <Header>
        <h1>Watch videos</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='videos'>
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
        <Card className='video'>
          <img src='placeholder' alt='Product-img' />
        </Card>
      </div>
    </>
  );
}

export default Videos;
