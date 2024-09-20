import React from 'react';
import './footer.css';
import logoImage from './Noblenoor logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoImage} alt="Noblenoor Logo" />
        </div>

        <div className="footer-links">
          <h3>Shop All</h3>
          <ul>
            <li><a href="#summer-collection">Summer Abayas</a></li>
            <li><a href="#everyday-abayas">Everyday Abayas</a></li>
            <li><a href="#occasion-abayas">Occasion Abayas</a></li>
            <li><a href="#professional-abayas">Professional Abayas</a></li>
            <li><a href="#jewelry">Jewelry</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="/size-guide">Size Guide</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
            <li><a href="/returns">Returns Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="https://twitter.com/yourbrand" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/yourbrand" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com/company/yourbrand" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Noblenoor. All rights reserved.</p>
        <div className="payment-icons">
          <span>Visa</span>
          <span>MasterCard</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;