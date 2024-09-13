import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import EmptyCart from './EmptyCart';
import { getCartItems, removeFromCart, updateCartQuantity } from './cartApi';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            setIsLoading(true);
            const data = await getCartItems();
            setCartItems(data.products);
            setIsLoading(false);
        } catch (err) {
            setError('Failed to fetch cart items');
            setIsLoading(false);
        }
    };

    const handleRemoveItem = async (productId) => {
        try {
            await removeFromCart(productId);
            fetchCartItems(); // Refresh cart items
        } catch (err) {
            setError('Failed to remove item from cart');
        }
    };

    const handleUpdateQuantity = async (productId, newQuantity) => {
        try {
            await updateCartQuantity(productId, newQuantity);
            fetchCartItems(); // Refresh cart items
        } catch (err) {
            setError('Failed to update item quantity');
        }
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (cartItems.length === 0) return <EmptyCart />;

    const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your cart</h2>
            {cartItems.map((item) => (
                <div key={item.product._id} className="cart-item">
                    <img src={item.product.image} alt={item.product.name} />
                    <div className="item-details">
                        <h3>{item.product.name}</h3>
                        <p>{item.product.price} SR</p>
                        <div className="quantity-controls">
                            <button onClick={() => handleUpdateQuantity(item.product._id, Math.max(1, item.quantity - 1))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button className="remove-item" onClick={() => handleRemoveItem(item.product._id)}>Remove</button>
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