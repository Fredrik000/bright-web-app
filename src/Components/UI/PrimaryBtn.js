import React from 'react';

export default function PrimaryBtn(props) {
  return (
    <button
      className={`primary-btn ${props.className}`}
      type='submit'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
