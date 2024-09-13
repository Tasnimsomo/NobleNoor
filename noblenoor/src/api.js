import axios from 'axios';

const API_URL = 'http://localhost:5000/';

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);  // Ensure API path is correct
    return response.data;
  } catch (error) {
    throw error.response.data || 'An error occurred during registration';  // Handle backend errors
  }
};


// Search products
export const searchProducts = async (searchParams) => {
  try {
    const response = await axios.get(`${API_URL}/products/search`, { params: searchParams });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

