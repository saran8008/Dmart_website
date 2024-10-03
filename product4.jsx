// ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import hor1 from '../../assets/horlicks.jpg';
import bos from '../../assets/boost.jpg';
import mor from '../../assets/mother.webp';
// import './ProductDetail.css';

const products = [
  {
    id: 1,
    image: hor1,
    title: 'Horlicks Classic Malt Jar : 500 gms',
    description: 'A classic malt drink with nutrients.',
    images: [hor1, bos, mor], 
    price1: 270,
    price: 220,
  },
  {
    id: 2,
    image: bos,
    title: 'Boost Jar: 450 gms',
    description: 'Boost is the secret of our energy.',
    images: [bos, hor1, mor],
    price1: 290,
    price: 260,
  },
  {
    id: 3,
    image: mor,
    title: 'Womens Horlicks Drink - Chocolate: 400 gms',
    description: 'Specifically designed for women.',
    images: [mor, bos, hor1],
    price1: 365,
    price: 305,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-detail">
        <div className='img3'>
        <div className="image-carousel">
            
        {product.images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Product ${index}`} 
            className="carousel-image" 
            onClick={() => handleImageClick(img)} 
          />
        ))}
      </div>
      <div className="selected-image">
        <img src={selectedImage} alt="Selected" className="large-image" />
      </div>
      <div className='til'>
      
      <h1>{product.title}</h1>
      
      
      <p>{product.description}</p>
      <p>MRP</p>
      <h2 className='price'>₹{product.price1}.00</h2>
      <p>DMart</p>
      <h2>₹{product.price}.00</h2>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
