import React from 'react';
import Logo from './Logo';
import CurrencySelector from './CurrencySelector';
import Icons from './Icons';
import './header.css';

function Header() {
  return (
    <header className="header">
      <CurrencySelector />
      <Logo />
      <Icons />
    </header>
  );
}

export default Header;