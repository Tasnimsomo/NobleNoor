import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../api';
import './Icons.css';

function Icons() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
        };
        const checkLoginStatus = () => {
            const loggedIn = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedIn === 'true');  // Check login status from localStorage
        };
        updateCartCount();
        checkLoginStatus();
        window.addEventListener('cartUpdated', updateCartCount);
        window.addEventListener('loginStatusChanged', checkLoginStatus);
        return () => {
            window.removeEventListener('cartUpdated', updateCartCount);
            window.removeEventListener('loginStatusChanged', checkLoginStatus);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchTerm('');
            setSearchResults([]);
        }
    };

    const goToProfile = () => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        console.log("Login status:", loggedInStatus); // For debugging
        if (loggedInStatus === 'true') {
            navigate('/account');
        } else {
            navigate('/login');  // Redirect to login if not logged in
        }
    };
    

    const goToCart = () => {
        navigate('/cart');
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const results = await searchProducts({ name: searchTerm });
            setSearchResults(results);
            console.log(results);
            navigate('/search-results', { state: { results } });
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    return (
        <>
            {isSearchOpen ? (
                <div className="search-overlay">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                    <button className="close-search" onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faTimes} />
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