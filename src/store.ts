import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import bookReducer from './components/books/booksSlice';
import { memixitApi } from './services/memixit';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(memixitApi.middleware),
  reducer: {
    book: bookReducer,
    [memixitApi.reducerPath]: memixitApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
