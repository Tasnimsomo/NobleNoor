import React from 'react';

const BillingDetails = ({ billingDetails, handleBillingChange, errors }) => {
  return (
    <div className="billing-details">
      <h2>Billing Details</h2>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={billingDetails.firstName}
          onChange={handleBillingChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={billingDetails.lastName}
          onChange={handleBillingChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={billingDetails.country}
          onChange={handleBillingChange}
        />
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={billingDetails.phone}
          onChange={handleBillingChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={billingDetails.email}
          onChange={handleBillingChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default BillingDetails;