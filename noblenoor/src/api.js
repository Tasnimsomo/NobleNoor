import axios from 'axios';

const API_URL = 'http://localhost:5000/';

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Log in a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
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
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
    const response = await axios.put(`${API_URL}/profile`, updates, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
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

// Add these functions to your existing api.js file

// Add item to cart
export const addToCart = async (token, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/cart/add`, 
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Remove item from cart
export const removeFromCart = async (token, productId) => {
  try {
    const response = await axios.delete(`${API_URL}/cart/remove/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get cart items
export const getCartItems = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/cart/items`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update cart item quantity
export const updateCartItemQuantity = async (token, productId, quantity) => {
  try {
    const response = await axios.put(`${API_URL}/cart/update`, 
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};