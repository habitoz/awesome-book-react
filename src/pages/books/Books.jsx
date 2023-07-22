import React, { useState } from 'react';
import BookCard from '../../components/BookCard';
import Style from './Books.module.css';
import BookForm from '../../Forms/book-form/BookForm';

/*  eslint-disable react/jsx-curly-brace-presence, no-unused-vars */
export default function Books() {
  const [books, setBooks] = useState([
    {
      id: 1, category: 'Romance', title: 'The Fault In Our Stars', author: 'John Green',
    },
    {
      id: 2, category: 'Fantasy', title: 'The Hunger Games', author: 'Suzanne Collins',
    },
    {
      id: 3, category: 'Philosophy', title: 'The Selfish Gene', author: 'Richard Dawkins',
    },
  ]);
  return (
    <>
      <div className={`${Style.PageContainer}`}>
        {
          books.map((book) => (
            <BookCard
              key={book.id}
              category={book.category}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </div>
      <div className={`${Style.Spacer}`} />
      <BookForm />
    </>
  );
}
