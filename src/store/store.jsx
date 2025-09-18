import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice.jsx';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});