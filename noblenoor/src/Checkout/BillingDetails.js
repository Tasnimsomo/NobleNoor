import React from 'react';

const BillingDetails = ({ billingDetails, handleBillingChange }) => {
  return (
    <div className="billing-details">
      <h2>Billing Details</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={billingDetails.firstName}
          onChange={handleBillingChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={billingDetails.lastName}
          onChange={handleBillingChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={billingDetails.country}
          onChange={handleBillingChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={billingDetails.phone}
          onChange={handleBillingChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={billingDetails.email}
          onChange={handleBillingChange}
        />
      </form>
    </div>
  );
};

export default BillingDetails;