import React from "react";
import { useLocation } from 'react-router-dom';
import './AccountPage.css';

const accountPage = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="account-container">
      <div className="account-box">
        <h1 className="account-title">Account's Page</h1>
        <h2 className="account-message"> {name || 'Valued Customer'}!</h2>
        <h3 className="account-email"> {email || 'your email address'}.</h3>
      </div>
    </div>
  );
};

export default accountPage;
