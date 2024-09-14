// Cart.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import EmptyCart from './EmptyCart';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                // Ensure each item has a price
                const itemsWithPrices = storedItems.map(item => ({
                    ...item,
                    price: item.price || 0 // Default to 0 if price is missing
                }));
                setCartItems(itemsWithPrices);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
        window.addEventListener('itemAddedToCart', handleItemAdded);

        return () => {
            window.removeEventListener('itemAddedToCart', handleItemAdded);
        };
    }, []);

    const handleItemAdded = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const removeItem = async (productId) => {
        try {
            const updatedItems = cartItems.filter(item => item.id !== productId);
            setCartItems(updatedItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            window.dispatchEvent(new Event('cartUpdated'));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            if (newQuantity <= 0) {
                throw new Error('Quantity must be a positive number');
            }

            const updatedItems = cartItems.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            setCartItems(updatedItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            window.dispatchEvent(new Event('cartUpdated'));
        } catch (error) {
            console.error('Error updating cart quantity:', error);
        }
    };

    const getItemPrice = (item) => {
      return typeof item.price === 'number' ? item.price : 
             typeof item.price === 'string' ? parseFloat(item.price.replace('$', '').replace(' USD', '')) : 0;
  };

    const calculateItemTotal = (item) => {
        return getItemPrice(item) * item.quantity;
    };

    const totalPrice = cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="cart">
            {showPopup && (
                <div className="popup">
                    <span className="popup-text">✨ Successfully added to cart! ✨</span>
                </div>
            )}
            <h2>Your cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>${getItemPrice(item).toFixed(2)} USD</p>
                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <p>Item Total: ${calculateItemTotal(item).toFixed(2)} USD</p>
                    </div>
                    <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))}
            <div className="cart-summary">
                <p>Estimated total: ${totalPrice.toFixed(2)} USD</p>
                <button className="checkout-button" onClick={handleCheckout}>Check out</button>
            </div>
        </div>
    );
}

export default Cart;