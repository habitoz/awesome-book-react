import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
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
