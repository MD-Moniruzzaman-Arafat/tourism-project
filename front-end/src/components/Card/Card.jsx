import { Link } from 'react-router';

export default function Card({ item }) {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.touristsSpotName}</h2>
          <p className="line-clamp-2">{item.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${item._id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
