import React from 'react';
import './AccountPage.css';

const AccountPage = () => {
  return (
    <div className="account-page">
      <h1>Welcome to account's page</h1>
      <a href="/login" className="log-out">Log out</a>
    </div>
  );
};

export default AccountPage;