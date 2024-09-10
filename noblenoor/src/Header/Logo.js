import React from 'react';
import logoImage from './Noblenoor logo.png';
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
    <a href="/">
      <img src={logoImage} alt="NobleNoor Logo" />
    </a>
    </div>
  );
}

export default Logo;