import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductLayout from './ProductLayout';
import './Collection.css';

function Collection({ titles, isFullView = false }) {
    const { collectionName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [collectionName]);

    const collections = [
        {
            title: "Everyday Abayas",
            products: [
                {
                    id: 1,
                    name: "Peach Abaya",
                    price: "$65.00 USD",
                    image: `${process.env.PUBLIC_URL}/abayas/peach abaya.jpeg`,
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 2,
                    name: "Macha Green abaya",
                    price: "$70.00 USD",
                    image: "/abayas/macha green abaya.jpeg",
                    reviews: 3,
                    rating: 4
                },
                {
                    id: 3,
                    name: "Brown & black abaya",
                    price: "$75.00 USD",
                    image: "/abayas/brown black abaya.jpeg",
                    reviews: 2,
                    rating: 5
                },
                {
                    id: 4,
                    name: "Floral black abaya",
                    price: "$80.00 USD",
                    image: "/abayas/floral black abaya.jpeg",
                    reviews: 5,
                    rating: 4
                },
                {
                    id: 5,
                    name: "black stars abaya",
                    price: "$85.00 USD",
                    image: "/abayas/stars black and white abaya.jpeg",
                    reviews: 3,
                    rating: 5
                }
            ]
        },
        {
            title: "Summer Collection",
            products: [
                {
                    id: 6,
                    name: "Beige Abaya",
                    price: "$50.00 USD",
                    image: "/abayas/beige abaya.jpeg",
                    reviews: 1,
                    rating: 5
                },
                {
                    id: 7,
                    name: "Cornflower Abaya",
                    price: "$75.00 USD",
                    image: "/abayas/cornFlower blue.jpeg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 8,
                    name: "Green Abaya",
                    price: "$80.00 USD",
                    image: "/abayas/green abaya.jpeg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 9,
                    name: "Floral Black Abaya",
                    price: "$90.00 USD",
                    image: "/abayas/floral black abaya.jpeg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 10,
                    name: "Gray and Black Abaya",
                    price: "$66.00 USD",
                    image: "/abayas/gray and black.jpeg",
                    reviews: 0,
                    rating: 0
                }
            ]            
        },
        {
            title: "Professional Abayas",
            products: [
                {
                    id: 11,
                    name: "white and emerald",
                    price: "$120.00 USD",
                    image: "/abayas/3 pieces white and emerald .jpeg",
                    reviews: 2,
                    rating: 4
                },
                {
                    id: 12,
                    name: "brown set abaya",
                    price: "$135.00 USD",
                    image: "/abayas/3 pieces brown abaya.jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 13,
                    name: "white and green abaya",
                    price: "$150.00 USD",
                    image: "/abayas/3 pieces white and green abaya.jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 14,
                    name: "black and white abaya",
                    price: "$145.00 USD",
                    image: "/abayas/black and white.jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 15,
                    name: "white and latte abaya",
                    price: "$160.00 USD",
                    image: "/abayas/stars 3 pieces white and green abaya.jpeg",
                    reviews: 5,
                    rating: 5
                }
            ]
        },
        {
            title: "Occasion Abayas",
                products: [
                    {
                        id: 16,
                        name: "baby blue & white",
                        price: "$50.00 USD",
                        image: "/abayas/occasion abaya  (1).jpeg",
                        reviews: 5,
                        rating: 5,
			description: "Elegant baby blue and white abaya perfect for special occasions. Features a flowing design with intricate detailing."
                    },
                    {
                        id: 17,
                        name: "Beige abaya",
                        price: "$70.00 USD",
                        image: "/abayas/occasion abaya  (3).jpeg",
                        reviews: 4,
                        rating: 4
                    },
                    {
                        id: 18,
                        name: "white and blue",
                        price: "$90.00 USD",
                        image: "/abayas/occasion abaya  (5).jpeg",
                        reviews: 4,
                        rating: 4
                    },
                    {
                        id: 19,
                        name: "Purple abaya",
                        price: "$80.00 USD",
                        image: "/abayas/occasion abaya  (2).jpeg",
                        reviews: 2,
                        rating: 2
                    },
                    {
                        id: 20,
                        name: "Sand beige abaya",
                        price: "$100.00 USD",
                        image: "/abayas/occasion abaya  (4).jpeg",
                        reviews: 3,
                        rating: 3
                    }
                ]
        },
        {
            title: "Jewelry",
            products: [
                {
                    id: 21,
                    name: "naimah jewels 1",
                    price: "$320.00 USD",
                    image: "/jewel/jewel (1).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 22,
                    name: "naimah jewels 2",
                    price: "$350.00 USD",
                    image: "/jewel/jewel (2).jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 23,
                    name: "naimah jewels 3",
                    price: "$300.00 USD",
                    image: "/jewel/jewel (3).jpeg",
                    reviews: 3,
                    rating: 3
                },
                {
                    id: 24,
                    name: "naimah jewels 4",
                    price: "$400.00 USD",
                    image: "/jewel/jewel (4).jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 25,
                    name: "naimah jewels 5",
                    price: "$500.00 USD",
                    image: "/jewel/jewel (5).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 26,
                    name: "naimah jewels 6",
                    price: "$300.00 USD",
                    image: "/jewel/jewel (6).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 27,
                    name: "naimah jewels 7",
                    price: "$50.00 USD",
                    image: "/jewel/jewel (7).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 28,
                    name: "naimah jewels 8",
                    price: "$430.00 USD",
                    image: "/jewel/jewel (4).jpeg",
                    reviews: 4,
                    rating: 4
                },
            ]
        }
    ];
    
    const currentCollections = isFullView
        ? collections.filter(c => c.title.toLowerCase().replace(/\s+/g, '-') === collectionName)
        : (titles ? collections.filter(c => titles.includes(c.title)) : collections);

    const addToCart = (product) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = existingCartItems.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            existingCartItems[existingItemIndex].quantity += 1;
        } else {
            existingCartItems.push({...product, quantity: 1});
        }

        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

        window.dispatchEvent(new Event('cartUpdated'));
        window.dispatchEvent(new Event('itemAddedToCart'));
    };

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
