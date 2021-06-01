import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'Components/UI/Card';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Product(props) {
  return (
    <Card>
      <img src={props.icon} alt='Product-img' />
      <div>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
      <div>
        <Link to={`/learningportal/videos/${props.id}`}>
          <PrimaryBtn className='blue'>Video</PrimaryBtn>
        </Link>
        <Link to='/manuals'>
          <PrimaryBtn className='green'>Manual</PrimaryBtn>
        </Link>
      </div>
    </Card>
  );
}

export default Product;
