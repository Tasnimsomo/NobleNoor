import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './NavMenu.css';
import CurrencySelector from '../Header/CurrencySelector';

const NavMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    } else {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li><a onClick={() => handleClick('everyday-abayas')}>Everyday Abayas</a></li>
          <li><a onClick={() => handleClick('summer-collection')}>Summer Abayas</a></li>
          <li><a onClick={() => handleClick('professional-abayas')}>Professional Abayas</a></li>
          <li><a onClick={() => handleClick('occasion-abayas')}>Occasion Abayas</a></li>
          <li><a onClick={() => handleClick('jewelry')}>Jewelry</a></li>
        </ul>
        <div className="mobile-currency-selector">
          <CurrencySelector />
        </div>
      </nav>
    </>
  );
};

export default NavMenu;