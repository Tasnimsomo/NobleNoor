import React, { useState } from 'react';
import BillingDetails from './BillingDetails';
import PaymentInstructions from './PaymentInstructions';
import './CheckoutPage.css';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
  });

  const [mpesaCode, setMpesaCode] = useState('');

  const handleBillingChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleMpesaCodeChange = (e) => {
    setMpesaCode(e.target.value);
  };

  const handleCompleteOrder = async () => {
    try {
      // Send order details to backend
      const response = await axios.post('/orders/complete-order', {
        billingDetails,
        mpesaCode,
      });

      if (response.data.success) {
        alert('Order completed successfully!');
        // Reset form
        setBillingDetails({
          firstName: '',
          lastName: '',
          country: '',
          phone: '',
          email: '',
        });
        setMpesaCode('');
      } else {
        alert('Error completing order. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error completing order. Please try again.');
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-content">
        <BillingDetails
          billingDetails={billingDetails}
          handleBillingChange={handleBillingChange}
        />
        <PaymentInstructions
          mpesaCode={mpesaCode}
          handleMpesaCodeChange={handleMpesaCodeChange}
        />
      </div>
      <button className="complete-order-btn" onClick={handleCompleteOrder}>
        Complete Order
      </button>
    </div>
  );
};

export default Checkout;