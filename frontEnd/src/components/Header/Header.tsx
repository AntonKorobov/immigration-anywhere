import LanguageButton from 'components/LanguageButton/LanguageButton';
import React from 'react';

import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="title link">
          <img className="title__img" src="assets/logo 1.png" alt="logo" />
          <h1 className="title__h1 h1">
            IMMIGRATION <br />
            <span className="h1_highlight">ANYWHERE</span>
          </h1>
        </a>
        <LanguageButton />
      </div>
    </header>
  );
}
