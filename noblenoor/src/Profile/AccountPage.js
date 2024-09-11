import axios from 'axios';

const API_URL = 'http://localhost:5000/';

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(${API_URL}/users/register, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Log in a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(${API_URL}/users/login, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Log out a user
export const logout = () => {
  localStorage.removeItem('jwtToken');
};

// Get the user's profile
export const getProfile = async (token) => {
  try {
    const response = await axios.get(${API_URL}/profile, {
      headers: {
        Authorization: Bearer ${token},
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update the user's profile
export const updateProfile = async (token, updates) => {
  try {
    const response = await axios.put(${API_URL}/profile, updates, {
      headers: {
        Authorization: Bearer ${token},
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
👍 api.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AccountPage.css';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
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
    return <div>You are not a user</div>;
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