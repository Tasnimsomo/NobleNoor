import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust this to match your backend URL

export const getCartItems = async () => {
  const response = await axios.get(`${API_URL}/cart/items`, { withCredentials: true });
  return response.data;
};

export const addToCart = async (productId, quantity) => {
  const response = await axios.post(`${API_URL}/cart/add`, { productId, quantity }, { withCredentials: true });
  return response.data;
};

export const removeFromCart = async (productId) => {
  const response = await axios.delete(`${API_URL}/cart/remove/${productId}`, { withCredentials: true });
  return response.data;
};

export const updateCartQuantity = async (productId, quantity) => {
  const response = await axios.put(`${API_URL}/cart/update`, { productId, quantity }, { withCredentials: true });
  return response.data;
};