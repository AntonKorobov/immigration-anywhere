import React from 'react';

import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-wrapper">
        <a href="https://github.com/NewAnton" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
        <a href="https://github.com/Julia1996" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
        <a href="https://github.com/sokolw" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
        <a href="https://github.com/zoxal" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
      </div>
    </footer>
  );
}
