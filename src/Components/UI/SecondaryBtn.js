import React from 'react';

export default function SecondaryBtn(props) {
  return (
    <button
      className={`secondary-btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
