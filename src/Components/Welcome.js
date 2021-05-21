import React from 'react';
import Card from 'Components/UI/Card';
import Header from 'Components/UI/Header';

function Welcome(props) {
  const repairClickHandler = () => {};
  const learningClickHandler = () => {};
  return (
    <>
      <Header>
        <h1>Watch videos</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='welcome'>
        <Card onStartClick={repairClickHandler}>
          <h1>Report repairs</h1>
          <p>Small explantation detaling what this is for </p>
        </Card>
        <Card onStartClick={learningClickHandler}>
          <h1>Learning portal</h1>
          <p>Small explantation detaling what this is for </p>
        </Card>
      </div>
    </>
  );
}

export default Welcome;
