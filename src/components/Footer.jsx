import React from 'react';
import Style from './Footer.module.css';

/*  eslint-disable react/jsx-curly-brace-presence */
export default function Footer() {
  return (
    <footer className={`${Style.FooterContainer}`}>
      <div>
        <p className={`${Style.CopyRightText}`}>&copy; 2023</p>
      </div>
    </footer>
  );
}
