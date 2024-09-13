import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Create an axios instance with default config
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

// Add a new function to clear the entire cart
export const clearCart = async () => {
  try {
    const response = await api.delete('/cart/clear');
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};