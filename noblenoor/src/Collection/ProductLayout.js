// ProductLayout.js
import React, { useState } from 'react';
import './Collection.css';
import ProductSidebar from './ProductSidebar';

function ProductLayout({ products, expanded }) {
    const [showAlert, setShowAlert] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = async (product) => {
        try {
            const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
    
            if (existingItemIndex > -1) {
                existingCart[existingItemIndex].quantity += 1;
            } else {
                // Convert price string to number
                const price = parseFloat(product.price.replace('$', '').replace(' USD', ''));
                existingCart.push({ ...product, price: price, quantity: 1 });
            }
    
            localStorage.setItem('cartItems', JSON.stringify(existingCart));
            window.dispatchEvent(new Event('cartUpdated'));
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2500);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const openSidebar = (product) => {
        setSelectedProduct(product);
    };

    const closeSidebar = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-layout">
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img
                            src={process.env.PUBLIC_URL + product.image}
                            alt={product.name}
                            className="product-image"
                            onClick={() => openSidebar(product)}
                        />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            {product.reviews > 0 && (
                                <div className="product-rating">
                                    {"⭐".repeat(product.rating)}
                                    <span>{product.reviews} review{product.reviews > 1 ? "s" : ""}</span>
                                </div>
                            )}
                            <p className="product-price">{product.price} SR</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductSidebar
                    product={selectedProduct}
                    onClose={closeSidebar}
                    addToCart={addToCart}
                />
            )}
            {showAlert && (
                <div className="alert-message">
                    Successfully added to cart
                </div>
            )}
        </div>
    );
}

export default ProductLayout;