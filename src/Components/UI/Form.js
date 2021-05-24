import React from 'react';

function Card(props) {
  return (
    <div className='form-container'>
      <div className={`form ${props.className}`}>{props.children}</div>
    </div>
  );
}

export default Card;
