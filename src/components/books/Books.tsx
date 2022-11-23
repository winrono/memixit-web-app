import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';

import { fetchAll } from './booksSlice';

export function Books() {
  const books = useAppSelector((state) => state.book.books);
  const status = useAppSelector((state) => state.book.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  return (
    <p>
      {status === 'failed' && <>Failed to load data from server</>}
      {status === 'loading' && <>Loading...</>}
      {books.map((book) => {
        return <div>{book.title}</div>;
      })}
    </p>
  );
}
