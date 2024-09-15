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
            console.log("Fetched data:", data);

            // Group products by category
            const groupedCollections = data.reduce((acc, product) => {
                if (!acc[product.category]) {
                    acc[product.category] = { title: product.category, products: [] };
                }
                acc[product.category].products.push(product);
                return acc;
            }, {});

            // Convert the grouped object to an array
            const collectionsArray = Object.values(groupedCollections);

            setCollections(collectionsArray);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
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
                    productId: product._id,  // MongoDB generated product ID
                    quantity: 1,             // Default quantity of 1 for adding to cart
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const data = await response.json();

            // Alert user and log the response for debugging
            if (response.ok) {
                alert("Item Added To Cart");
                console.log("Cart updated:", data);
            } else {
                alert("Failed to add item to cart");
                console.error("Error:", data);
            }

            // Trigger cart update event (optional)
            window.dispatchEvent(new Event('cartUpdated'));
            window.dispatchEvent(new Event('itemAddedToCart'));
        } catch (err) {
            alert("Something went wrong. Please try again.");
            console.error("Error adding item to cart:", err);
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
                        addToCart={addToCart} // Pass the addToCart function to ProductLayout
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
