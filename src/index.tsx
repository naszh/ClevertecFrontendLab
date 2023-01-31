import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { MainPage } from './pages/main';

import './index.css';
import { TermsPage } from './pages/terms';
import { BookPage } from './pages/book';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/books/all' />} />
        <Route path='/books/:category' element={<MainPage />} />
        <Route path='/books/:category/:bookId' element={<BookPage />} />
        <Route path='/terms' element={<TermsPage view='terms' />} />
        <Route path='/contract' element={<TermsPage view='contract' />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
