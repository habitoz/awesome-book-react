import React from 'react';
import BookCard from '../../components/BookCard';
import Style from './Books.module.css';

/*  eslint-disable react/jsx-curly-brace-presence */
export default function Books() {
  return (
    <div className={`${Style.PageContainer}`}>
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
