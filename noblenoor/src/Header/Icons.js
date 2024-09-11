import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Icons.css';

function Icons() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // New state to track login status
    const navigate = useNavigate();

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
        };

        const checkLoginStatus = () => {
            // Example: check if the user is logged in by checking a flag in localStorage
            const loggedIn = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedIn === 'true');
        };

        updateCartCount(); // Initial cart count
        checkLoginStatus(); // Check login status on initial render

        window.addEventListener('cartUpdated', updateCartCount);
        window.addEventListener('loginStatusChanged', checkLoginStatus); // Optional: Listen for login status changes

        return () => {
            window.removeEventListener('cartUpdated', updateCartCount);
            window.removeEventListener('loginStatusChanged', checkLoginStatus);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const goToProfile = () => {
        if (isLoggedIn) {
            navigate('/account');  // Redirect to the account page if the user is logged in
        } else {
            navigate('/login');  // Redirect to the login page if the user is not logged in
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