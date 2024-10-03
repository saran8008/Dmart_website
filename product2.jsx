// Product2.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product2.css';
import hor1 from '../../assets/horlicks.jpg';
import bos from '../../assets/boost.jpg';
import mor from '../../assets/mother.webp';

import { FaShoppingCart } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
// import Carousel from '../carousel2/carousel2';
import Carousel from '../carousel2/carousel';
import logo from '../../assets/dart.2.png';
import Cart from '../cart2/cart2';

const Product2 = () => {
  const products = [
    {
      id: 1,
      image: hor1,
      title: 'Horlicks Classic Malt Jar : 500 gms',
      price1: 270,
      price: 220,
    },
    {
      id: 2,
      image: bos,
      title: 'Boost Jar: 450 gms',
      price1: 290,
      price: 260,
    },
    {
      id: 3,
      image: mor,
      title: 'Womens Horlicks Drink - Chocolate: 400 gms',
      price1: 365,
      price: 305,
    },
  ];

  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleCartVisibility = () => {
    setCartVisible((prevVisible) => !prevVisible);
  };

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div className='two pt-4' id='five'>
        <nav >
          <img src={logo} alt="Logo" className='logo' />
          <div className='one'>
            <div className='three'>
              <GrSearch />
            </div>
            <input type="text" placeholder="Search for products" className="search" />
          </div>
          <ul className='nav'>
            <li><a href='#one'>Home</a></li>
            <li><a href=''>Login</a></li>
            <li className='nav-item'>
              <a onClick={toggleCartVisibility}>Cart <FaShoppingCart /> {cart.length}</a>
            </li>
          </ul>
        </nav>
      </div>

      {isCartVisible && (
        <Cart cart={cart} setCart={setCart} toggleCartVisibility={toggleCartVisibility} />
      )}

      <Carousel />

      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="box">
            <div className="img-box" onClick={() => handleImageClick(item.id)}>
              <img className="image" src={item.image} alt={item.title} />
            </div>
            <div className="button1">
              <p>{item.title}</p>
              <p>MRP</p>
              <h2 className='price'>₹{item.price1}.00</h2>
              <p>DMart</p>
              <h2>₹{item.price}.00</h2>
              <button onClick={() => addToCart(item)} className='add'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product2;
