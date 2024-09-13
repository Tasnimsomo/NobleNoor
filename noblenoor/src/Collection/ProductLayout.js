import React, { useState } from 'react';
import './Collection.css';
import ProductSidebar from './ProductSidebar';
import axios from 'axios'; // Import axios

function ProductLayout({ products, expanded }) {
    const [showAlert, setShowAlert] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to send the Add to Cart request to the backend
    const handleAddToCart = async (product) => {
        try {
            const response = await axios.post('/api/cart/add', { 
                productId: product._id, 
                quantity: 1 // Default quantity to 1
            });

            if (response.status === 200) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 2500);
            }
        } catch (error) {
            console.error('Failed to add item to cart:', error);
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
                    <div key={product._id} className="product-card">
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
                            <p className="product-price">{product.price}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(product)}
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
