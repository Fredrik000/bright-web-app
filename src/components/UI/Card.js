import React from 'react';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      <div className='card-content'>{props.children}</div>
      <PrimaryBtn onClick={props.onClick}>Start</PrimaryBtn>
    </div>
  );
}

export default Card;
