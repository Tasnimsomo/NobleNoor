import React, { useState } from 'react';
import './CurrencySelector.css';

const currencies = [
  { code: 'CAD $', name: 'Canada' },
  { code: 'KES', name: 'Kenya' },
  { code: 'USD $', name: 'United States' },
  // Add more currencies
];

function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const selected = currencies.find(curr => curr.code === event.target.value);
    setSelectedCurrency(selected);
    setIsOpen(false);
  };

  return (
    <div className={`currency-selector ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="selected-currency">
        <span className="currency-code">{selectedCurrency.code}</span>
        <span className="currency-name">{selectedCurrency.name}</span>
        <span className="select-arrow">▼</span>
      </div>
      <select
        value={selectedCurrency.code}
        onChange={handleChange}
        className="custom-select"
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} | {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;