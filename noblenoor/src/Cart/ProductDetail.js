import React from 'react';
import { addToCart } from '../api';

function ProductDetail({ product }) {
    const handleAddToCart = async () => {
        try {
            const token = localStorage.getItem('jwtToken');
            await addToCart(token, product._id, 1); // Add 1 quantity of the product
            // Dispatch a custom event to notify the Cart component
            window.dispatchEvent(new Event('itemAddedToCart'));
        } catch (error) {
            console.error('Failed to add item to cart', error);
        }
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price} SR</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
