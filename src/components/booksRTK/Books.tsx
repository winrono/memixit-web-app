import { useGetCardsQuery } from 'services/memixit';

export function Books() {
  const { data, error, isLoading } = useGetCardsQuery();

  return (
    <div>
      {error ? <>Failed to load data from server</> : null}
      {isLoading ? <>Loading...</> : null}
      {data?.map((book, index) => {
        return <div key={index}>{book.title}</div>;
      })}
    </div>
  );
}
