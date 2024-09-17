import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from '../Profile/AuthProvider';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ products: [], totalAmount: 0 });
    const { token, user } = useAuth();

    useEffect(() => {
        if (token && user) {
            fetchCartItems(); // Ensure this function is correctly defined
        } else {
            setCart({ products: [], totalAmount: 0 });
        }
    }, [token, user]);

    const fetchCartItems = async () => {
        try {
            const response = await fetch("http://localhost:5000/cart/items", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch cart items');
            }
            const cartData = await response.json();
            setCart(cartData);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const addToCart = async (product, quantity = 1) => {
        try {
            const response = await fetch("http://localhost:5000/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ productId: product._id, quantity }),
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error('Error adding to cart:', error);
            throw error;
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/cart/remove/${productId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to remove item from cart');
            }

            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error('Error removing from cart:', error);
            throw error;
        }
    };

    const updateCartQuantity = async (productId, quantity) => {
        try {
            const response = await fetch("http://localhost:5000/cart/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ productId, quantity }),
            });

            if (!response.ok) {
                throw new Error('Failed to update cart quantity');
            }

            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error('Error updating cart quantity:', error);
            throw error;
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, fetchCartItems }}>
            {children}
        </CartContext.Provider>
    );
};
