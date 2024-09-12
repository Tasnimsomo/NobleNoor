import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header.js';
import NavMenu from './Menu/NavMenu.js';
import HeroSection from './Hero/HeroSection';
import Collection from './Collection/Collection.js';
import Login from './Profile/Login.js';
import Signup from './Profile/Signup.js';
import AccountPage from './Profile/AccountPage.js';
import AdminPage from './Admin/adminPage.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin route without header */}
        <Route path="/adminPage" element={<AdminPage />} />

        {/* Regular routes with header */}
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<AccountPage />} />
          {/* Add other regular routes here */}
        </Route>
      </Routes>
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
        <Route path="/" element={
          <>
            <HeroSection />
            <Collection titles={["Everyday Abayas", "Summer Collection", "Professional Abayas", "Occasion Abayas", "Jewelry"]} />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountPage />} />
        {/* Add other regular routes here */}
      </Routes>
    </>
  );
}

export default App;