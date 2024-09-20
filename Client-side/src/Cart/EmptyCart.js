import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.css';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="cart-icon">
        <img src="/Empty Cart Icon.png" alt="empty cart icon" />
      </div>
      <h2>Your Cart is Empty</h2>
      <p>Nothing to show here. Let's go shop for some lovely products from us.</p>
      <Link to="/" className="shop-now-button">Shop Now</Link>
    </div>
  );
}

export default EmptyCart;