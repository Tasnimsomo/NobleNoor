import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (userData) => {
  try {
    console.log('Sending registration data:', userData);
    const response = await axios.post(`${API_URL}/users/register`, userData);
    console.log('Registration response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response || error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error('An error occurred during registration. Please try again.');
    }
  }
};

export const searchProducts = async (searchParams) => {
  try {
    const response = await axios.get(`${API_URL}/products/search`, { params: searchParams });
    return response.data;
  } catch (error) {
    console.error('Search error:', error.response || error);
    throw error.response?.data || 'An error occurred during the search';
  }
};

// In a separate file, e.g., axiosConfig.js
import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Adjust based on how you store the token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);