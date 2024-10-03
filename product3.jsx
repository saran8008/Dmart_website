// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Product2 from './components/Product2/Product2';
import Product2 from './product2';
// import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductDetail from './product4';

const Apps = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product2 />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    
  );
};

export default Apps;
