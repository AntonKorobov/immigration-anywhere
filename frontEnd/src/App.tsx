import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Main } from 'pages/Main/Main';
import { Footer } from 'components/Footer/Footer';
import { Page404 } from 'pages/Page404/Page404';

import './App.scss';
import { About } from 'pages/About/About';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}
