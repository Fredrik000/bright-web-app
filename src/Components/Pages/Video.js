import React from 'react'
import Header from 'Components/UI/Header';
import {products} from 'Components/Objects/Products'

function Video(props) {

    let product = products[props.productId];

    console.log(product);

    return(
        <>
            <Header className='headerting'>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </Header>
            <div className='video'>
                <iframe
                    className='player'
                    src={product.videoLink}
                    title="Product video" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </>
    );
}

export default Video;