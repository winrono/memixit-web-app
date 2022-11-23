import { useGetCardsQuery } from 'services/memixit';

export function Books() {
  const { data, error, isLoading } = useGetCardsQuery();

  return (
    <p>
      {error ? (
        <>Failed to load data from server</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((book) => {
          return <div>{book.title}</div>;
        })
      ) : (
        false
      )}
    </p>
  );
}
