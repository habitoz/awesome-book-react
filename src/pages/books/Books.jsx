import React from 'react';
import BookCard from '../../components/BookCard';
import Style from './Books.module.css';
import BookForm from '../../Forms/book-form/BookForm';

/*  eslint-disable react/jsx-curly-brace-presence */
export default function Books() {
  return (
    <>
      <div className={`${Style.PageContainer}`}>
        <BookCard />
        <BookCard />
      </div>
      <div className={`${Style.Spacer}`} />
      <BookForm />
    </>
  );
}
