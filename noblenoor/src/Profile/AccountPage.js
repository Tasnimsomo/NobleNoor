import React from "react";
import { useAuth } from "./AuthProvider";
import { FaUserEdit, FaLock, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";

const AccountPage = () => {
  const auth = useAuth();

  return (
    <div className="accounts-page">
      <h1>My Account</h1>
      <div className="account-content">
        <div className="account-details card">
          <h2>
            Welcome, {auth.user?.username}! <FaUserEdit className="icon" />
          </h2>
          <p>Email: {auth.user?.email}</p>
          <button className="edit-button">
            <FaUserEdit className="icon" /> Edit Profile
          </button>
        </div>
        <div className="quick-actions card">
          <h2>Quick Actions</h2>
          <button className="action-button">
            <FaLock className="icon" /> Change Password
          </button>
          <button className="action-button">
            <FaMapMarkerAlt className="icon" /> Manage Addresses
          </button>
          <button onClick={() => auth.logOut()} className="logout-button">
            <FaSignOutAlt className="icon" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
