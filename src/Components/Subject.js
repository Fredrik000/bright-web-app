import React from 'react';
import Card from 'Components/UI/Card';

function Subject(props) {
  const startClickHandler = () => {};
  return (
    <Card onStartClick={startClickHandler}>
      <div className='subject'>
        <h2>Heading</h2>
        <p>Small explantation detaling what this is for </p>
      </div>
    </Card>
  );
}

export default Subject;
