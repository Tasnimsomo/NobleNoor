import React from 'react';

const PaymentInstructions = ({ mpesaCode, handleMpesaCodeChange, error }) => {
  return (
    <div className="payment-instructions">
      <h2>Payment Instructions</h2>
      <ol>
        <li>On your Safaricom phone go the M-PESA menu</li>
        <li>Select Send money</li>
        <li>Send money to: <strong>0712584960</strong></li>
        <li>Enter exactly the amount due</li>
        <li>Follow subsequent prompts to complete the transaction</li>
        <li>You will receive a confirmation SMS from M-PESA with a Confirmation Code</li>
      </ol>
      <p>After you receive the confirmation code, please input your phone number and the confirmation code that you received from M-PESA below.</p>
      <input
        type="text"
        placeholder="Phone Number"
      />
      <div>
        <input
          type="text"
          placeholder="MPESA Confirmation Code"
          value={mpesaCode}
          onChange={handleMpesaCodeChange}
        />
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default PaymentInstructions;