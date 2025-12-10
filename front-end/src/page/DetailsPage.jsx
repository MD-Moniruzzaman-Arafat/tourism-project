import { useLoaderData } from 'react-router';

export default function DetailsPage() {
  const res = useLoaderData();
  const data = res.tours;
  console.log(data);
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {/* Image */}
        <div className="w-full h-80 overflow-hidden rounded-xl shadow">
          <img
            src={data?.image}
            alt={data?.touristsSpotName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title + Location */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-2">{data?.touristsSpotName}</h1>
          <p className="text-gray-600 text-lg">{data?.countryName}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Average Cost</p>
            <h2 className="text-xl font-semibold">{data?.averageCost} BDT</h2>
          </div>

          <div className="p-4 border rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Season</p>
            <h2 className="text-xl font-semibold">{data?.seasonality}</h2>
          </div>

          <div className="p-4 border rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Travel Time</p>
            <h2 className="text-xl font-semibold">{data?.travelTime}</h2>
          </div>

          <div className="p-4 border rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">Visitors / Year</p>
            <h2 className="text-xl font-semibold">
              {data?.totalVisitorsPerYear}
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{data?.description}</p>
        </div>

        {/* User Info */}
        <div className="mt-8 p-4 bg-gray-100 border rounded-lg">
          <h3 className="text-lg font-semibold mb-1">Uploaded By</h3>
          <p className="text-gray-700">
            {data?.UserName} ({data?.userEmail})
          </p>
        </div>

        <div className="flex justify-between my-5 flex-wrap">
          <button className="btn">Delete</button>
          <button className="btn">Edit</button>
        </div>
      </div>
    </>
  );
}
