import React from 'react';
import Logo from './Logo';
import Icons from './Icons';
import LanguageSelector from './LanguageSelector';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <LanguageSelector />
      </div>
      <div className="center-section">
        <Logo />
      </div>
      <div className="right-section">
        <Icons />
      </div>
    </header>
  );
}

export default Header;