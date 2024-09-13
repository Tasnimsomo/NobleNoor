import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Icons.css';

function Icons() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
        };

        updateCartCount(); // Initial count
        window.addEventListener('cartUpdated', updateCartCount);

        return () => {
            window.removeEventListener('cartUpdated', updateCartCount);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const goToProfile = () => {
        if (isLoggedIn) {
            navigate('/account');
        } else {
            navigate('/login');
        }
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <>
            {isSearchOpen ? (
                <div className="search-overlay">
                    <input type="text" placeholder="Search..." />
                    <button onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            ) : (
                <div className="icons-container">
                    <button onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button onClick={goToProfile}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button onClick={goToCart} className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingBag} className="custom-icon" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
            )}
        </>
    );
}

export default Icons;