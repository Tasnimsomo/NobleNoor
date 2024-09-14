import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import EmptyCart from './EmptyCart';
import { useCart } from '../Context/CartContext';

function Cart() {
    const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();
    const navigate = useNavigate();

    const removeItem = (productId) => {
        removeItemFromCart(productId);
    };

    const updateQuantity = (productId, newQuantity) => {
        updateItemQuantity(productId, newQuantity);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

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