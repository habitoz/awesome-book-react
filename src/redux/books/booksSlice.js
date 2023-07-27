import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    remove(store, action) {
      return store.filter((book) => book.id !== action.payload);
    },
    add(store, action) {
      store.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
