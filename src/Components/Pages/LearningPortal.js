import React from 'react';
import Header from 'Components/UI/Header';
import Product from 'Components/UI/Product';
import { PRODUCTS } from 'Components/Objects/Products';

function LearningPortal(props) {
  return (
    <>
      <Header>
        <h1>Learning Portal</h1>
        <p>Small explantation detaling what this is for</p>
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
