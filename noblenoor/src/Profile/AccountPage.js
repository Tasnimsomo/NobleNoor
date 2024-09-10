import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AccountPage.css';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="accounts-page">
      <h1>Account</h1>
      <button className="logout-button" onClick={handleLogout}>
        Log out
      </button>

      <div className="account-content">
        <div className="order-history">
          <h2>Order history</h2>
          <p>You haven't placed any orders yet.</p>
        </div>

        <div className="account-details">
          <h2>Account details</h2>
          <p>{user.name}</p>
          <p>{user.country}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;