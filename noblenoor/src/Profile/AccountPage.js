import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from './api';  // Import logout function
import './AccountPage.css';

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          navigate('/login');  // If no token, redirect to login
          return;
        }

        const response = await axios.get(${API_URL}/profile, {
          headers: {
            Authorization: Bearer ${token},
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        navigate('/login');  // Redirect to login if fetching profile fails
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    logout();  // Call logout function
    navigate('/');  // Redirect to home after logout
  };

  if (!user) {
    return <div>You are not logged in. Please log in first.</div>;
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