import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import type { BooksList } from './types';

export const memixitApi = createApi({
  baseQuery: graphqlRequestBaseQuery({ url: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getCards: builder.query<BooksList, void>({
      query: () => ({
        document: gql`
          {
            books {
              title
            }
          }
        `,
      }),
      transformResponse: (response: { books: BooksList }) => {
        return response.books;
      },
    }),
  }),
  reducerPath: 'memixitApi',
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCardsQuery } = memixitApi;
