// AccountPage.js
import React from 'react';
import './AccountPage.css';

const AccountPage = ({ user }) => {
  
  return (
    <div className="account-page">
      <h1>Account</h1>
      <button className="logout-button">Log out</button>
      
      <div className="account-sections">
        <div className="section order-history">
          <h2>Order history</h2>
          <p>You haven't placed any orders yet.</p>
        </div>
        
        <div className="section account-details">
          <h2>Account details</h2>
          <p className="user-name">{user.name}</p>
          <p className="user-location">{user.location}</p>
          <p className="user-country">{user.country}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;