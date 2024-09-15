import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import EmptyCart from './EmptyCart';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [payload, setPayload] = useState({});
    const [hasError, setError] = useState(false);
    const navigate = useNavigate();

    async function fetchCart() {
        try {
            const res = await fetch("http://localhost:5000/cart/items");
            const data = await res.json();
            console.log("Fetched cart data:", data); // Log the data to verify structure
            setCartItems(data.products || []); // Set cart items
            setPayload(data); // Set payload
        } catch (error) {
            setError(true);
            console.error('Error fetching cart:', error);
        }
    }

    async function changeQty(id, delta) {
        const item = cartItems.find(item => item.product._id === id);
        const newQuantity = item.quantity + delta;

        if (newQuantity <= 0) {
            return removeItem(id); // Remove item if quantity becomes 0 or negative
        }

        try {
            const res = await fetch("http://localhost:5000/cart/update", {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    quantity: newQuantity,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            fetchCart(); // Fetch updated cart
        } catch (err) {
            console.error('Error updating quantity:', err);
        }
    }

    async function removeItem(id) {
        try {
            const res = await fetch(`http://localhost:5000/cart/remove/${id}`, {
                method: "DELETE",
            });
            fetchCart(); // Fetch updated cart after removing the item
        } catch (err) {
            console.error('Error removing item:', err);
        }
    }

    useEffect(() => {
        fetchCart();
        const handleCartUpdated = () => {
            fetchCart();
        };
        window.addEventListener('cartUpdated', handleCartUpdated);
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdated);
        };
    }, []);

    if (cartItems.length === 0 && !hasError) {
        return <EmptyCart />;
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-items">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.product._id}>
                                <td>{item.product.name}</td>
                                <td>${item.product.price.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => changeQty(item.product._id, -1)} className="quantity-btn">-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button onClick={() => changeQty(item.product._id, 1)} className="quantity-btn">+</button>
                                </td>
                                <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="cart-summary">
                <p>Subtotal: ${payload.totalAmount ? payload.totalAmount.toFixed(2) : '0.00'}</p>
                <button className="empty-cart-btn" onClick={emptyCart}>Empty Cart</button>
                <button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
