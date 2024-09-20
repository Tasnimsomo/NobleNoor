import React from "react";
import { useLocation } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="order-container">
      <div className="order-box">
        <h1 className="order-title">Order Confirmed!</h1>
        <h2 className="order-message">Thank you for your purchase, {name || 'Valued Customer'}!</h2>
        <h3 className="order-email">A confirmation email will be sent to {email || 'your email address'}.</h3>
      </div>
    </div>
  );
};

export default Order;
