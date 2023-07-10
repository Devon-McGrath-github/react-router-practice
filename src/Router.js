import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

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
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>

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
    </>
  );
};
