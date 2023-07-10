import { useOutletContext, useParams } from 'react-router-dom';

export default function Book() {
  const obj = useOutletContext();
  const { id } = useParams();
  return (
    <>
      <h1>{obj.hello}</h1>
      <h1>Book {id} </h1>
    </>
  );
}
