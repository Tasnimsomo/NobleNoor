import axios from 'axios';

const API_URL = 'http://localhost:5000/';  // Replace with your actual API endpoint

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Registration failed';
  }
};

// Log in a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    localStorage.setItem('jwtToken', response.data.token);  // Save the JWT token
    localStorage.setItem('isLoggedIn', 'true');  // Set logged in status
    window.dispatchEvent(new Event('loginStatusChanged'));  // Dispatch login event
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

// Log out a user
export const logout = () => {
  localStorage.removeItem('jwtToken');
  localStorage.setItem('isLoggedIn', 'false');
  window.dispatchEvent(new Event('loginStatusChanged'));  // Dispatch logout event
};

// Get the user's profile
export const getProfile = async () => {
  const token = localStorage.getItem('jwtToken');  // Get token from localStorage
  if (!token) {
    throw new Error('User is not authenticated');
  }

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Pass the token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch profile';
  }
};

// Update the user's profile
export const updateProfile = async (updates) => {
  const token = localStorage.getItem('jwtToken');  // Get token from localStorage
  if (!token) {
    throw new Error('User is not authenticated');
  }

  try {
    const response = await axios.put(`${API_URL}/profile`, updates, {
      headers: {
        Authorization: `Bearer ${token}`,  // Pass the token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to update profile';
  }
};
