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
            const res = await fetch("http://localhost:4000/cart");
            const data = await res.json();
            console.log(data.data.items);
            setCartItems(data.data.items);
            setPayload(data.data);
        } catch (error) {
            setError(true);
            console.error('Error fetching cart:', error);
        }
    }

    async function increaseQty(id) {
        try {
            const res = await fetch("http://localhost:4000/cart", {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    quantity: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log(res);
            fetchCart();
            alert("Item incremented");
        } catch (err) {
            console.error('Error increasing quantity:', err);
        }
    }

    async function decreaseQty(id) {
        try {
            const res = await fetch("http://localhost:4000/cart", {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    quantity: -1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log(res);
            fetchCart();
            alert("Item decremented");
        } catch (err) {
            console.error('Error decreasing quantity:', err);
        }
    }

    async function emptyCart() {
        try {
            const res = await fetch("http://localhost:4000/cart/empty-cart", {
                method: "DELETE",
            });
            await res.json();
            fetchCart();
            navigate("/");
        } catch (err) {
            console.error('Error emptying cart:', err);
        }
    }

    useEffect(() => {
        fetchCart();
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
                            <tr key={item.productId._id}>
                                <td>{item.productId.name}</td>
                                <td>${item.productId.price.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => decreaseQty(item.productId._id)} className="quantity-btn">-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button onClick={() => increaseQty(item.productId._id)} className="quantity-btn">+</button>
                                </td>
                                <td>${item.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="cart-summary">
                <p>Subtotal: ${payload.subTotal ? payload.subTotal.toFixed(2) : '0.00'}</p>
                <button className="empty-cart-btn" onClick={emptyCart}>Empty Cart</button>
                <button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;