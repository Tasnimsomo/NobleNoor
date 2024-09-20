import React from "react";
import { useAuth } from "./AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";

const AccountPage = () => {
  const auth = useAuth();

  return (
    <div className="account-page">
      <div className="account-card">
        <h1>Welcome to Your Account Page</h1>
        <p className="account-info">Name: {auth.user?.username}</p>
        <p className="account-info">Email: {auth.user?.email}</p>
        <button onClick={() => auth.logOut()} className="logout-button">
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
