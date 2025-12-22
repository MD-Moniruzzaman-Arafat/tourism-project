import { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { updateTours } from '../utils/api';

export default function DetailsPage() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const res = useLoaderData();
  const data = res.tours;
  console.log(data);

  const [formData, setFormData] = useState({
    image: data?.image || '',
    touristsSpotName: data?.touristsSpotName || '',
    countryName: data?.countryName || '',
    location: data?.location || '',
    description: data?.description || '',
    averageCost: data?.averageCost || '',
    seasonality: data?.seasonality || '',
    travelTime: data?.travelTime || '',
    totalVisitorsPerYear: data?.totalVisitorsPerYear || '',
    userEmail: user.email,
    UserName: user.displayName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateTours({ params: data._id, updatedData: formData });
    console.log(res);
    console.log(formData);
    navigate(`/details/${data._id}`);
    onCloseModal();
  };
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <Modal open={open} onClose={onCloseModal} center>
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Image</label>
              <input
                name="image"
                onChange={handleChange}
                value={formData.image}
                type="text"
                className="input"
                placeholder="Image"
              />
              <label className="label">Tourists Spot Name</label>
              <input
                name="touristsSpotName"
                onChange={handleChange}
                value={formData.touristsSpotName}
                type="text"
                className="input"
                placeholder="Tourists Spot Name"
              />
              <label className="label">Country Name</label>
              <input
                name="countryName"
                onChange={handleChange}
                value={formData.countryName}
                type="text"
                className="input"
                placeholder="Country Name"
              />
              <label className="label">Location</label>
              <input
                name="location"
                onChange={handleChange}
                value={formData.location}
                type="text"
                className="input"
                placeholder="Location"
              />
              <label className="label">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="input"
                cols="30"
                rows="10"
                placeholder="Description"
              ></textarea>
              <label className="label">Average Cost</label>
              <input
                name="averageCost"
                onChange={handleChange}
                value={formData.averageCost}
                type="text"
                className="input"
                placeholder="Average Cost"
              />
              <label className="label">Seasonality</label>
              <select
                name="seasonality"
                onChange={handleChange}
                value={formData.seasonality}
                className="input"
              >
                <option>select</option>
                <option value="summer">summer</option>
                <option value="winter">winter</option>
              </select>
              <label className="label">Travel Time</label>
              <input
                name="travelTime"
                onChange={handleChange}
                value={formData.travelTime}
                type="text"
                className="input"
                placeholder="Travel Time"
              />
              <label className="label">TotalVisitorsPerYear</label>
              <input
                name="totalVisitorsPerYear"
                onChange={handleChange}
                value={formData.totalVisitorsPerYear}
                type="text"
                className="input"
                placeholder="TotalVisitorsPerYear"
              />
              <label className="label">User Email</label>
              <input
                disabled
                name="userEmail"
                onChange={handleChange}
                value={formData.userEmail}
                type="email"
                className="input"
                placeholder="User Email"
              />
              <label className="label">User Name</label>
              <input
                disabled
                name="UserName"
                onChange={handleChange}
                value={formData.UserName}
                type="text"
                className="input"
                placeholder="User Name"
              />
              <button className="btn btn-neutral mt-4">update</button>
            </fieldset>
          </form>
        </Modal>
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
          <button onClick={onOpenModal} className="btn">
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
