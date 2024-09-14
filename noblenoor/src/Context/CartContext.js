import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCartItems, addToCart, removeFromCart, updateCartQuantity } from '../Cart/cartApi';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const items = await getCartItems();
      setCartItems(items.products);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addItemToCart = async (productId, quantity) => {
    try {
      await addToCart(productId, quantity);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeItemFromCart = async (productId) => {
    try {
      await removeFromCart(productId);
      fetchCartItems();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateItemQuantity = async (productId, quantity) => {
    try {
      await updateCartQuantity(productId, quantity);
      fetchCartItems();
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);