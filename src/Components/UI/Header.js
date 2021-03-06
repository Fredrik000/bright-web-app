import React from 'react';

function Header(props) {
  return <div className={`header ${props.className}`}>{props.children}</div>;
}

export default Header;
