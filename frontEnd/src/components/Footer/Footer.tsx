import React from 'react';

import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-wrapper">
        <a href="#" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
        <a href="#" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
        <a href="#" className="footer__link social-link">
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
