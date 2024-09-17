import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header.js';
import NavMenu from './Menu/NavMenu.js';
import HeroSection from './Hero/HeroSection';
import Collection from './Collection/Collection.js';
import Cart from './Cart/Cart.js';
import Checkout from './Checkout/Checkout.js';
import Login from './Profile/Login.js';
import Signup from './Profile/Signup.js';
import AccountPage from './Profile/AccountPage.js';
import AuthProvider from "./Profile/AuthProvider.js";
import AdminPage from './Admin/adminPage.js';
import PrivateRoute from './PrivateRoute.js';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Admin route without header */}
          <Route path="/adminPage" element={<AdminPage />} />

          {/* Regular routes with header */}
          <Route path="/" element={<Layout />}>
            <Route index element={
              <>
                <HeroSection />
                <Collection titles={["Everyday Abayas", "Summer Collection", "Professional Abayas", "Occasion Abayas", "Jewelry"]} />
              </>
            } />
            <Route path="/collection/:collectionName" element={<Collection isFullView={true} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="/account" element={<AccountPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

// Layout component for regular pages
function Layout() {
  return (
    <>
      <Header />
      <NavMenu />
      <Routes>
        <Route index element={
          <>
            <HeroSection />
            <Collection titles={["Everyday Abayas", "Summer Collection", "Professional Abayas", "Occasion Abayas", "Jewelry"]} />
          </>
        } />
        <Route path="/collection/:collectionName" element={<Collection isFullView={true} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </>
  );
}

export default App;