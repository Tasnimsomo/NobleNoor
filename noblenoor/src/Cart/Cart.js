import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import EmptyCart from './EmptyCart';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedItems);

        // Listen for the custom event
        window.addEventListener('itemAddedToCart', handleItemAdded);

        return () => {
            window.removeEventListener('itemAddedToCart', handleItemAdded);
        };
    }, []);

    const handleItemAdded = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    };

    const removeItem = (index) => {
        const newItems = [...cartItems];
        newItems.splice(index, 1);
        setCartItems(newItems);
        localStorage.setItem('cartItems', JSON.stringify(newItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const updateQuantity = (index, newQuantity) => {
        const newItems = [...cartItems];
        newItems[index].quantity = newQuantity;
        setCartItems(newItems);
        localStorage.setItem('cartItems', JSON.stringify(newItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>{item.price} SR</p>
                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button className="remove-item" onClick={() => removeItem(index)}>Remove</button>
                </div>
            ))}
            <div className="cart-summary">
                <p>Estimated total: {totalPrice.toFixed(2)} </p>
                <button className="checkout-button" onClick={handleCheckout}>Check out</button>
            </div>
        </div>
    );
}

export default Cart;