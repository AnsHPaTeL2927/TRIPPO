import { useParams } from "react-router-dom";

export const Booking = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Booking Done {id}</h1>
    </>
  );
};
