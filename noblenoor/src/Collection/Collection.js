import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductLayout from './ProductLayout';
import './Collection.css';

function Collection({ titles, isFullView = false }) {
    const { collectionName } = useParams();
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, [collectionName]);

    async function fetchData() {
        try {
            const res = await fetch("http://localhost:5000/products/");
            const data = await res.json();
            setCollections(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const currentCollections = isFullView
        ? collections.filter(c => c.title.toLowerCase().replace(/\s+/g, '-') === collectionName)
        : (titles ? collections.filter(c => titles.includes(c.title)) : collections);

    const addToCart = async (product) => {
        try {
            const response = await fetch("http://localhost:5000/cart/add", {
                method: "POST",
                body: JSON.stringify({
                    productId: product.id,
                    quantity: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            let data = await response.json();
            alert("Item Added To Cart");
            console.log(data);
            window.dispatchEvent(new Event('cartUpdated'));
            window.dispatchEvent(new Event('itemAddedToCart'));
        } catch (err) {
            alert("Something Went Wrong");
            console.log(err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="collections-container">
          {currentCollections.map(collection => (
            <div key={collection.title} id={collection.title.toLowerCase().replace(/\s+/g, '-')} className="collection-section">
              <h2 className="collection-title">{collection.title}</h2>
              <ProductLayout
                products={isFullView ? collection.products : collection.products.slice(0, 8)}
                expanded={isFullView}
                addToCart={addToCart}
              />
              {!isFullView && (
                <Link
                    to={`/collection/${collection.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="view-all-btn-link"
                >
                    <button className="view-all-btn">View All</button>
                </Link>
              )}
            </div>
          ))}
        </div>
    );
}

export default Collection;