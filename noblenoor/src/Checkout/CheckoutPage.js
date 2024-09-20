import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BillingDetails from './BillingDetails';
import PaymentInstructions from './PaymentInstructions';
import './CheckoutPage.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
  });

  const [mpesaCode, setMpesaCode] = useState('');
  const [errors, setErrors] = useState({});

  const handleBillingChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleMpesaCodeChange = (e) => {
    setMpesaCode(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!billingDetails.firstName) newErrors.firstName = 'First name is required';
    if (!billingDetails.lastName) newErrors.lastName = 'Last name is required';
    if (!billingDetails.country) newErrors.country = 'Country is required';
    if (!billingDetails.phone) newErrors.phone = 'Phone is required';
    if (!billingDetails.email) newErrors.email = 'Email is required';
    if (!mpesaCode) newErrors.mpesaCode = 'M-PESA code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate order processing
      setTimeout(() => {
        // Redirect to order confirmation page
        navigate('/order', { 
          state: { 
            name: `${billingDetails.firstName} ${billingDetails.lastName}`,
            email: billingDetails.email
          } 
        });
      }, 1500); // Simulate a short delay
    }
  };

  return (
    <div className="checkout-page">
      <form onSubmit={handleCompleteOrder}>
        <div className="checkout-content">
          <BillingDetails
            billingDetails={billingDetails}
            handleBillingChange={handleBillingChange}
            errors={errors}
          />
          <PaymentInstructions
            mpesaCode={mpesaCode}
            handleMpesaCodeChange={handleMpesaCodeChange}
            error={errors.mpesaCode}
          />
        </div>
        <div className="button-container">
          <button type="submit" className="complete-order-btn">
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;