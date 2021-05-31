import React from 'react';
import Header from 'Components/UI/Header';
import Product from 'Components/UI/Product';

function LearningPortal(props) {
  const products = [
    {
      id: 'unique-ID 1',
      name: 'Product 1',
      desc: 'some description 1',
      src: 'http://img.youtube.com',
    },
    {
      id: 'unique-ID 2',
      name: 'product 2',
      desc: 'some description 2',
      src: 'http://img.youtube.com',
    },
    {
      id: 'unique-ID 3',
      name: 'product 3',
      desc: 'some description 3',
      src: 'http://img.youtube.com',
    },
  ];
  return (
    <>
      <Header>
        <h1>Learning Portal</h1>
        <p>Small explantation detaling what this is for</p>
      </Header>
      <div className='products'>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            desc={product.desc}
            src={product.src}
          />
        ))}
      </div>
    </>
  );
}

export default LearningPortal;
