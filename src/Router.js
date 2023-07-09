import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookList from './pages/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';

export const Router = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
      </Routes>
    </>
  );
};
