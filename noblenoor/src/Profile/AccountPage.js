import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AccountPage.css';

const API_URL = 'http://localhost:5000';

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.setItem('isLoggedIn', 'false');
    window.dispatchEvent(new Event('loginStatusChanged'));
    navigate('/login');
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
          <p>{user.email}</p>
          <p>{user.country}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;