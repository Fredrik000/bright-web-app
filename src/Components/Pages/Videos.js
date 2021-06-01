import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'Components/UI/Header';
import { PRODUCTS } from 'Components/Objects/Products';

function Videos(props) {
  const params = useParams();

  const productVideo = PRODUCTS.find(
    (productVideo) => productVideo.id === params.productId
  );

  if (!productVideo) {
    return <p>No video found!</p>;
  }

  return (
    <>
      <Header className='headerting'>
        <h1>{productVideo.name}</h1>
        <p>{productVideo.desc}</p>
      </Header>
      <div className='video-player'>
        <iframe
          className='video-player'
          src={productVideo.videoLink}
          title='Product video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Videos;
