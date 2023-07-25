import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
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

export default categoriesSlice.reducer;
