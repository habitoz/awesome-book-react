import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../../components/BookCard';
import Style from './Books.module.css';
import BookForm from '../../Forms/book-form/BookForm';
import { removeBook, addBook, fetchBooks } from '../../redux/books/booksSlice';

/* eslint-disable react-hooks/exhaustive-deps */
export default function Books() {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <div className={`${Style.PageContainer}`}>
        {
          books.map((book) => (
            <BookCard
              key={book.item_id}
              category={book.category}
              title={book.title}
              author={book.author}
              removeBookHandler={() => dispatch(removeBook(book.item_id))}
            />
          ))
        }
      </div>
      <div className={`${Style.Spacer}`} />
      <BookForm addBookHandler={(data) => dispatch(addBook(data))} />
    </>
  );
}
