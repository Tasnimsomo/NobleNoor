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
                    price: "KSh 1,600",
                    image: `${process.env.PUBLIC_URL}/abayas/peach abaya.jpeg`,
                    reviews: 4,
                    rating: 5
                },
                {
                    id: 2,
                    name: "Macha Green abaya",
                    price: "KSh 1,200",
                    image: "/abayas/macha green abaya.jpeg",
                    reviews: 3,
                    rating: 4
                },
                {
                    id: 3,
                    name: "Brown & black abaya",
                    price: "KSh 1,700",
                    image: "/abayas/brown black abaya.jpeg",
                    reviews: 2,
                    rating: 5
                },
                {
                    id: 4,
                    name: "Floral black abaya",
                    price: "KSh 4,800",
                    image: "/abayas/floral black abaya.jpeg",
                    reviews: 5,
                    rating: 4
                },
                {
                    id: 5,
                    name: "black stars abaya",
                    price: "KSh 1,800",
                    image: "/abayas/stars black and white abaya.jpeg",
                    reviews: 3,
                    rating: 5
                },
                {
                    id: 5,
                    name: "Cream",
                    price: "KSh 1,800",
                    image: "/abayas/everyday abayas (1).jpeg",
                    reviews: 4,
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
                    price: "KSh 2,500",
                    image: "/abayas/beige abaya.jpeg",
                    reviews: 1,
                    rating: 5
                },
                {
                    id: 7,
                    name: "Cornflower Abaya",
                    price: "KSh 1,300",
                    image: "/abayas/cornFlower blue.jpeg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 8,
                    name: "Green Abaya",
                    price: "KSh 2,800",
                    image: "/abayas/green abaya.jpeg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 9,
                    name: "Floral Black Abaya",
                    price: "KSh 1,900",
                    image: "/abayas/floral black abaya.jpeg",
                    reviews: 0,
                    rating: 0
                },
                {
                    id: 10,
                    name: "black abaya",
                    price: "KSh 2,600",
                    image: "/abayas/summer abayas (1).jpeg",
                    reviews: 2,
                    rating: 1
                },
                {
                    id: 10,
                    name: "sky-blue abaya",
                    price: "KSh 3,600",
                    image: "/abayas/summer abayas (2).jpeg",
                    reviews: 3,
                    rating: 4
                }
            ]
        },
        {
            title: "Professional Abayas",
            products: [
                {
                    id: 11,
                    name: "white and emerald",
                    price: "KSh 1,200",
                    image: "/abayas/3 pieces white and emerald .jpeg",
                    reviews: 2,
                    rating: 4
                },
                {
                    id: 12,
                    name: "brown set abaya",
                    price: "KSh 1,300",
                    image: "/abayas/3 pieces brown abaya.jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 13,
                    name: "white and green abaya",
                    price: "KSh 1,500",
                    image: "/abayas/3 pieces white and green abaya.jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 14,
                    name: "black and white abaya",
                    price: "KSh 1,400",
                    image: "/abayas/black and white.jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 15,
                    name: "white and latte abaya",
                    price: "KSh 1,600",
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
                    price: "KSh 2,500",
                    image: "/abayas/occasion abaya  (1).jpeg",
                    reviews: 5,
                    rating: 5,
                    description: "Elegant baby blue and white abaya perfect for special occasions. Features a flowing design with intricate detailing."
                },
                {
                    id: 17,
                    name: "Beige abaya",
                    price: "KSh 1,900",
                    image: "/abayas/occasion abaya  (3).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 18,
                    name: "white and blue",
                    price: "KSh 2,900",
                    image: "/abayas/occasion abaya  (5).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 19,
                    name: "Purple abaya",
                    price: "KSh 2,800",
                    image: "/abayas/occasion abaya  (2).jpeg",
                    reviews: 2,
                    rating: 2
                },
                {
                    id: 20,
                    name: "Sand beige abaya",
                    price: "KSh 1,000",
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
                    price: "KSh 3,200",
                    image: "/jewel/jewel (1).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 22,
                    name: "naimah jewels 2",
                    price: "KSh 3,500",
                    image: "/jewel/jewel (2).jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 23,
                    name: "naimah jewels 3",
                    price: "KSh 3,000",
                    image: "/jewel/jewel (3).jpeg",
                    reviews: 3,
                    rating: 3
                },
                {
                    id: 24,
                    name: "naimah jewels 4",
                    price: "KSh 4,000",
                    image: "/jewel/jewel (4).jpeg",
                    reviews: 5,
                    rating: 5
                },
                {
                    id: 25,
                    name: "naimah jewels 5",
                    price: "KSh 5,000",
                    image: "/jewel/jewel (5).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 26,
                    name: "naimah jewels 6",
                    price: "KSh 3,000",
                    image: "/jewel/jewel (6).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 27,
                    name: "naimah jewels 7",
                    price: "KSh 5,000",
                    image: "/jewel/jewel (7).jpeg",
                    reviews: 4,
                    rating: 4
                },
                {
                    id: 28,
                    name: "naimah jewels 8",
                    price: "KSh 4,300",
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