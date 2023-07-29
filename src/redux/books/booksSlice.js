import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook(store, action) {
      return store.filter((book) => book.id !== action.payload);
    },
    addBook(store, action) {
      const id = (Math.random() * 1000000).toFixed(0);
      store.push({ ...action.payload, id });
    },
  },
});
export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
