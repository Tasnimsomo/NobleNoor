import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header.js';
import Login from './Profile/Login.js';
import Signup from './Profile/Signup.js';
import AccountPage from './Profile/AccountPage.js';
import AdminPage from './Admin/adminPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </>
  );
}

export default App;