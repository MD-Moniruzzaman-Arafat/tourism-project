import { Link } from 'react-router';
import Card from '../Card/Card';

export default function TouristsSpot({ data }) {
  return (
    <>
      <h1 className="text-center font-extrabold text-4xl">Tourists Spot</h1>
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.tours.slice(0, 6).map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <div>
        <button
          to={'/all-tourists-spot'}
          className="btn btn-primary btn-outline block mx-auto mb-10"
        >
          <Link to={'/all-tourists-spot'}>See All</Link>
        </button>
      </div>
    </>
  );
}
