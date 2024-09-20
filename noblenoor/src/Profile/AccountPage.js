import React from 'react';
import './AccountPage.css';

const AccountPage = () => {
  return (
    <div className="account-page">
      <h1>Account</h1>
      <a href="#" className="log-out">Log out</a>
      
      <div className="account-content">
        <div className="order-history">
          <h2>Order history</h2>
          <p>You haven't placed any orders yet.</p>
        </div>
        
        <div className="account-details">
          <h2>Account details</h2>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;