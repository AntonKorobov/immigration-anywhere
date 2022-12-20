import React from 'react';

import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="title link">
          <img className="title__img" src="assets/logo 1.png" alt="logo" />
          <h1 className="title__h1 h1">
            IMMIGRATION <br />
            <span className="highlight">ANYWHERE</span>
          </h1>
        </a>
      </div>
      {/* <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink end className="nav__link link" to="/">
              Main page
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link link" to="/about">
              About us
            </NavLink>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
