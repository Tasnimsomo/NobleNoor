import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import EmptyCart from './EmptyCart';
import { getCartItems, removeFromCart, updateCartItemQuantity } from '../api';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('jwtToken');
            const data = await getCartItems(token);
            setCartItems(data.products);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch cart items');
            setLoading(false);
        }
    };

    const handleItemAdded = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const removeItem = async (productId) => {
        try {
            const token = localStorage.getItem('jwtToken');
            await removeFromCart(token, productId);
            fetchCartItems(); // Refresh cart items after removal
        } catch (err) {
            setError('Failed to remove item from cart');
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            const token = localStorage.getItem('jwtToken');
            await updateCartItemQuantity(token, productId, newQuantity);
            fetchCartItems(); // Refresh cart items after update
        } catch (err) {
            setError('Failed to update item quantity');
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (cartItems.length === 0) return <EmptyCart />;

    return (
        <div className="cart">
            {showPopup && (
                <div className="popup">
                    <span className="popup-text">✨ Successfully added to cart! ✨</span>
                </div>
            )}
            <h2>Your cart</h2>
            {cartItems.map((item) => (
                <div key={item.product._id} className="cart-item">
                    <img src={item.product.image} alt={item.product.name} />
                    <div className="item-details">
                        <h3>{item.product.name}</h3>
                        <p>{item.product.price} SR</p>
                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.product._id, Math.max(1, item.quantity - 1))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button className="remove-item" onClick={() => removeItem(item.product._id)}>Remove</button>
                </div>
            ))}
            <div className="cart-summary">
                <p>Estimated total: {totalPrice.toFixed(2)} SR</p>
                <button className="checkout-button" onClick={handleCheckout}>Check out</button>
            </div>
        </div>
    );
}

export default Cart;