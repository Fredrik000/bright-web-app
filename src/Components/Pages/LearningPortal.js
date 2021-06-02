import React from 'react';
import Header from 'Components/UI/Header';
import Product from 'Components/UI/Product';
import { PRODUCTS } from 'Components/Objects/Products';

function LearningPortal(props) {
  return (
    <>
      <Header>
        <h1>Learn Bright!</h1>
        <p>Here you can watch videos of our products or read our manuals</p>
      </Header>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            desc={product.desc}
            icon={product.icon}
          />
        ))}
      </div>
    </>
  );
}

export default LearningPortal;
