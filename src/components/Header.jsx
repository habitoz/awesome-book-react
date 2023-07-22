import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.module.css';
/* eslint-disable react/prop-types, jsx-a11y/no-noninteractive-element-interactions,
jsx-a11y/click-events-have-key-events */

export default function Header() {
  return (
    <nav className={`${Style.Nav}`}>
      <Link className={`${Style.Link} ${Style.AppLogo}`} to="/">Bookstore CMS</Link>
      <ul className={`${Style.NavItems}`}>
        <li><Link className={`${Style.Link}`} to="/">Books</Link></li>
        <li><Link className={`${Style.Link}`} to="/categories">Category</Link></li>
      </ul>
    </nav>
  );
}
