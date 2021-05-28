import React from 'react';

function Card(props) {
  return (
    <div className='form-container'>
      <form className={`form ${props.className}`} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </div>
  );
}

export default Card;
