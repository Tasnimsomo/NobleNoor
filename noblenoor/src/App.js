import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header.js';
import NavMenu from './Menu/NavMenu.js';
import Login from './Profile/Login.js';
import Signup from './Profile/Signup.js';
import AccountPage from './Profile/AccountPage.js';
import HeroSection from './Hero/HeroSection.js';
import Collection from './Collection/Collection.js';
import Cart from './Cart/Cart.js';
import Checkout from './Cart/Checkout.js';
import Footer from './Footer/footer.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} />
        <NavMenu />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Collection titles={["Everyday Abayas", "Summer Collection", "Professional Abayas", "Occasion Abayas", "Jewelry"]} />
            </>
          } />
          <Route path="/collection/:collectionName" element={<Collection isFullView={true} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Add this new route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          <Route path="/account" element={
            isAuthenticated ? <AccountPage user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;