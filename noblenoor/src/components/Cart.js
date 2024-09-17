import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../Profile/AuthProvider';


function Cart() {
    const { cart, removeFromCart, updateCartQuantity, fetchCartItems } = useCart();
    const { user, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !user) {
            navigate('/login');
        } else {
            fetchCartItems();
        }
    }, [token, user, navigate]);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.products.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.products.map((item) => (
                        <div key={item.product._id} className="cart-item">
                            <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.product.name}</h3>
                                <p>Price: {item.product.price} SR</p>
                                <div className="quantity-control">
                                    <button onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.product._id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: {cart.totalAmount} SR</h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;