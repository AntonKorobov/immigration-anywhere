import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { Header } from 'components/Header/Header';
import { Main } from 'pages/Main/Main';
import { Footer } from 'components/Footer/Footer';
import { Page404 } from 'pages/Page404/Page404';

import { About } from 'pages/About/About';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}
