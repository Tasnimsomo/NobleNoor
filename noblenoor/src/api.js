import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update this to your backend URL

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const getCartItems = async () => {
  try {
    const response = await api.get('/cart/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

export const addToCart = async (productId, quantity) => {
  try {
    const response = await api.post('/cart/add', { productId, quantity });
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

export const removeFromCart = async (productId) => {
  try {
    const response = await api.delete(`/cart/remove/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

export const updateCartQuantity = async (productId, quantity) => {
  try {
    const response = await api.put('/cart/update', { productId, quantity });
    return response.data;
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    throw error;
  }
};

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