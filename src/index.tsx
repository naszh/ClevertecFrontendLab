import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main';

import './index.css';
import { TermsPage } from './pages/terms';
import { BookPage } from './pages/book';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/' element={<BookPage />} />
        {/* <Route path='/' element={<TermsPage view='terms' />} /> */}
        {/* <Route path='/' element={<TermsPage view='contract' />} /> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
