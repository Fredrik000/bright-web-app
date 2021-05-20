import React from 'react';
import Card from 'Components/UI/Card';

function Subject(props) {
  const startClickHandler = () => {};
  return (
    <Card className='subject' onStartClick={startClickHandler}>
      <h2>Heading</h2>
      <p>Small explantation detaling what this is for </p>
    </Card>
  );
}

export default Subject;
