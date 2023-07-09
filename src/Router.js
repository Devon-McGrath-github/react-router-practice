import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
