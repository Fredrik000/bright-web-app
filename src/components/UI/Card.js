import React from 'react';

function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      {props.children}
      <button onClick={props.onStartClick}>Start</button>
    </div>
  );
}

export default Card;
