/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import * as booksAPI from './booksAPI';

export interface BooksState {
  books: Array<any>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
};

export const fetchAll = createAsyncThunk('books/fetchAll', async () => {
  const result = await booksAPI.fetchAll();
  return result.books;
});

export const counterSlice = createSlice({
  initialState,
  name: 'books',
  reducers: {
    fetchAll: (state, action: PayloadAction<Array<any>>) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload;
      })
      .addCase(fetchAll.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default counterSlice.reducer;
