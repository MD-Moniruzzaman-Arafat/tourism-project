import { useLoaderData } from 'react-router';
import Card from '../components/Card/Card';

export default function AllTouristsSpotPage() {
  const data = useLoaderData();
  return (
    <>
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.tours.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
