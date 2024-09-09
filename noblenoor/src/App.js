import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Profile/Login.js';
import Signup from './Profile/Signup.js';
import AccountPage from './Profile/AccountPage.js';

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
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          <Route path="/account" element={
            isAuthenticated ? <AccountPage user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;