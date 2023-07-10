import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

/* PAGES */
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookList from './pages/BookList';
import NotFound from './pages/NotFound';

/* COMPONENTS */
import Book from './components/Book';
import NewBook from './components/NewBook';
import BookLayout from './Layouts/BookLayout';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

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
    </>
  );
};
