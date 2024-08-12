import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import App from '../App';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

