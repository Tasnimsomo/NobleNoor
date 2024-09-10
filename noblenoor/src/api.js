import axios from 'axios';

const API_URL = 'http://localhost:5000/';

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'An error occurred during registration';
  }
};

// Log in a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    
    // Save the JWT token to localStorage
    localStorage.setItem('jwtToken', response.data.token);
    
    return response.data;
  } catch (error) {
    throw error.response?.data || 'An error occurred during login';
  }
};

// Log out a user
export const logout = () => {
  localStorage.removeItem('jwtToken');
};

// Get the user's profile
export const getProfile = async () => {
  const token = localStorage.getItem('jwtToken');
  if (!token) throw new Error('No token found, user is not authenticated');

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'An error occurred while fetching the profile';
  }
};

// Update the user's profile
export const updateProfile = async (updates) => {
  const token = localStorage.getItem('jwtToken');
  if (!token) throw new Error('No token found, user is not authenticated');

  try {
    const response = await axios.put(`${API_URL}/profile`, updates, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'An error occurred while updating the profile';
  }
};