import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Profile/Login';
import Signup from './Profile/Signup';
import PrivateRoute from './PrivateRoute';
import AccountPage from './Profile/AccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<AccountPage />} />
        </Route>
        {/* You can add a catch-all route to redirect to login if you want */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;