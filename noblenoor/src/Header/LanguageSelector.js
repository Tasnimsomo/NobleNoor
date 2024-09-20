import React from 'react';
import kenyaFlag from './kenya-flag.jpeg';
import './LanguageSelector.css';

function LanguageSelector() {
  return (
    <div className="language-selector">
      <img src={kenyaFlag} alt="Kenya Flag" className="flag-icon" />
      <span>Kenya | English</span>
    </div>
  );
}

export default LanguageSelector;