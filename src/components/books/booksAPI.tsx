import { request, gql } from 'graphql-request';

const queryObject = gql`
  {
    books {
      title
    }
  }
`;

export function fetchAll() {
  return request('http://localhost:4000', queryObject);
}
