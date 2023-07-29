import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../../components/BookCard';
import Style from './Books.module.css';
import BookForm from '../../Forms/book-form/BookForm';
import { removeBook, addBook } from '../../redux/books/booksSlice';

export default function Books() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
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
              removeBookHandler={() => dispatch(removeBook(book.id))}
            />
          ))
        }
      </div>
      <div className={`${Style.Spacer}`} />
      <BookForm addBookHandler={(data) => dispatch(addBook(data))} />
    </>
  );
}
