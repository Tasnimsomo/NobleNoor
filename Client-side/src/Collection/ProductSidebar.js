// src/Collection/ProductSidebar.js
import React from 'react';

function ProductSidebar({ product, onClose, addToCart }) {
  return (
    <div className="product-sidebar">
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="sidebar-content">
        <div className="product-info">
          <h2>{product.name}</h2>
          <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
          <p className="product-price">{product.price}</p>
          {product.reviews > 0 && (
            <div className="product-rating">
              {"⭐".repeat(product.rating)}
              <span>{product.reviews} review{product.reviews > 1 ? "s" : ""}</span>
            </div>
          )}
          <p className="product-description">{product.description}</p>
        </div>
        <div className="size-chart-container">
          <h3>Size Chart</h3>
          <table className="size-chart">
            <thead>
              <tr>
                <th>HEIGHT IN CM</th>
                <th>HEIGHT IN FEET</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>147 cm - 152 cm : size 50</td><td>4'10-5'0 feet : Size 50</td></tr>
              <tr><td>152 cm - 157 cm : size 52</td><td>5'0-5'2 feet : Size 52</td></tr>
              <tr><td>157 cm - 162 cm : size 54</td><td>5'2-5'4 feet : Size 54</td></tr>
              <tr><td>162 cm - 167 cm : size 56</td><td>5'4-5'6 feet : Size 56</td></tr>
              <tr><td>167 cm - 172 cm : size 58</td><td>5'6-5'8 feet : Size 58</td></tr>
              <tr><td>172cm - 177cm : size 60</td><td>5'8-5'10 feet : size 60</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="sidebar-footer">
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductSidebar;
