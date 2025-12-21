import { useLoaderData } from 'react-router';
import Card from '../components/Card/Card';
import useAuth from '../hooks/useAuth';

export default function MyList() {
  const result = useLoaderData();
  const { user } = useAuth();
  const data = result.tours.filter((item) => item.userEmail === user.email);
  console.log(data);
  return (
    <>
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
