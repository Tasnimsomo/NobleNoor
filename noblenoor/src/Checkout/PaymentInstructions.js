import React from 'react';

const PaymentInstructions = ({ mpesaCode, handleMpesaCodeChange }) => {
  return (
    <div className="payment-instructions">
      <h2>Payment Instructions</h2>
      <ol>
        <li>On your Safaricom phone go the M-PESA menu</li>
        <li>Select Lipa Na M-PESA and then select Buy Goods and Services</li>
        <li>Enter the Till Number <strong>664091</strong></li>
        <li>Enter exactly the amount due</li>
        <li>Follow subsequent prompts to complete the transaction</li>
        <li>You will receive a confirmation SMS from M-PESA with a Confirmation Code</li>
      </ol>
      <p>After you receive the confirmation code, please input your phone number and the confirmation code that you received from M-PESA below.</p>
      <input
        type="text"
        placeholder="MPESA Confirmation Code"
        value={mpesaCode}
        onChange={handleMpesaCodeChange}
      />
    </div>
  );
};

export default PaymentInstructions;